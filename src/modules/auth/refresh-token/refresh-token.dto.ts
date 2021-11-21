import { IsEmail, IsNotEmpty } from 'class-validator';
export class RefreshTokenDTO {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  refreshToken: string;
}
