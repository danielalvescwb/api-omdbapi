import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { Repository } from 'typeorm';
import { OAuthEntity } from '../o-auth/entities/o-auth.entity';

@Injectable()
export class CheckAuthMiddleware implements NestMiddleware {
  constructor(
    @InjectRepository(OAuthEntity)
    private usersRepository: Repository<OAuthEntity>,
  ) {}
  async use(req: Request, res: Response, next: NextFunction) {
    console.log('########## CheckAuthMiddleware');

    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        error: true,
        code: 'token.invalid',
        message: 'Authorization not found',
        action: 'logout',
      });
    }

    const [, token] = authorization?.split(' ');

    if (!token) {
      return res.status(401).json({
        error: true,
        code: 'token.invalid',
        message: 'Token not present.',
        action: 'logout',
      });
    }

    try {
      let decoded: DecodedToken;

      if (/\/refresh-token$/.test(req.url)) {
        decoded = verify(token as string, process.env.JWT_SECRET, {
          ignoreExpiration: true,
        }) as DecodedToken;
      } else {
        decoded = verify(
          token as string,
          process.env.JWT_SECRET,
          {},
        ) as DecodedToken;
      }

      // const user = await this.usersRepository.findOne({
      //   where: { email: decoded.sub },
      //   withDeleted: true,
      //   relations: ['permissions', 'roles'],
      // });

      req.tokenDecoded = decoded;

      return next();
    } catch (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({
          error: true,
          code: 'token.expired',
          message: err.message,
        });
      }
      return res.status(401).json({
        error: true,
        code: 'token.invalid',
        message: err.message,
        action: 'logout',
      });
    }
  }
}
