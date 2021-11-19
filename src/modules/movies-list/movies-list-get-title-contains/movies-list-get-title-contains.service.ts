import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { axiosApi } from 'src/services/axiosApi';
import { In, Repository } from 'typeorm';
import { MoviesListEntity } from '../entities/movies-list.entity';
import { ILike } from 'typeorm';
import { RedisCacheService } from '../../../cache/redis-cache/redis-cache.service';

interface Isearch {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface IResponse {
  Search: Isearch[];
  totalResults: string;
  Response: string;
}

@Injectable()
export class MoviesListGetTitleContainsService {
  constructor(
    @InjectRepository(MoviesListEntity)
    private readonly moviesListEntity: Repository<MoviesListEntity>,
    private readonly cacheManager: RedisCacheService,
  ) {}
  async exec(title: string) {
    const titleExistsInCache = await this.cacheManager.get(
      `movies-get-title-contains.${title}`,
    );

    if (titleExistsInCache) {
      return titleExistsInCache;
    }

    const titleExistsInDb = await this.moviesListEntity.find({
      where: { Title: ILike(`%${title}%`) },
    });

    if (titleExistsInDb.length > 0) {
      await this.cacheManager.set(`movies-get-title-contains.${title}`, {
        resource: 'cache',
        data: titleExistsInDb,
        totalResults: titleExistsInDb.length,
      });
      return {
        resource: 'database',
        data: titleExistsInDb,
        totalResults: titleExistsInDb.length,
      };
    }

    const completeList = [];
    const imdbIDList = [];
    let page = 1;
    let end = true;
    while (end) {
      const list = await axiosApi.get<IResponse>('/', {
        params: {
          s: title,
          page,
        },
      });
      if (list.data.Response === 'True') {
        list.data.Search?.forEach(({ Title, Year, imdbID, Type, Poster }) => {
          imdbIDList.push(imdbID);
          completeList.push({ Title, Year, imdbID, Type, Poster });
        }),
          (page += 1);
      } else {
        end = false;
      }
    }

    if (completeList.length > 0) {
      await this.cacheManager.set(`movies-get-title-contains.${title}`, {
        resource: 'cache',
        data: completeList,
        totalResults: completeList.length,
      });

      const existingMovies = await this.moviesListEntity.find({
        select: ['imdbID'],
        where: { imdbID: In(imdbIDList) },
      });
      const existingMoviesList = [];
      existingMovies.forEach(({ imdbID }) => existingMoviesList.push(imdbID));

      completeList.forEach(async (found) => {
        if (existingMoviesList.includes(found.imdbID)) {
          await this.moviesListEntity.update({ imdbID: found.imdbID }, found);
        } else {
          await this.moviesListEntity.save(found);
        }
      });
    }

    return {
      resource: 'omdbapi',
      data: completeList,
      totalResults: completeList.length,
    };
  }
}
