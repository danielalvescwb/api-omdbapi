import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

@Injectable()
export class OAuthCheckMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
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

      req.tokenDecoded = decoded;

      return next();
    } catch (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({
          error: true,
          code: 'token.expired',
          message: err.message,
          action: 'refresh',
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
