import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';

type RefreshToken = {
  email: string;
  payload: {
    id?: number;
    name?: string;
    avatar_url?: string;
  };
};

@Injectable()
export class GenerateJwtAndRefreshTokenService {
  execute({ email, payload }: RefreshToken): {
    token: string;
    refreshToken: string;
  } {
    let token: string;
    try {
      token = sign(payload, process.env.JWT_SECRET, {
        subject: email,
        expiresIn: process.env.JWT_EXPIRES_IN,
      });
    } catch (error) {
      console.log(error);
    }

    const refreshToken = uuid();

    return {
      token,
      refreshToken,
    };
  }
}
