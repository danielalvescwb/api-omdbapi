import { PartialType } from '@nestjs/mapped-types';
import { CreateOAuthGithubMeDto } from './create-o-auth-github-me.dto';

export class UpdateOAuthGithubMeDto extends PartialType(CreateOAuthGithubMeDto) {}
