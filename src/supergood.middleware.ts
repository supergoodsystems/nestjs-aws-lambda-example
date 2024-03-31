import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class SupergoodMiddleware implements NestMiddleware {

  async use(req: Request, res: Response, next: NextFunction) {
    const Supergood = require('Supergood');
    Supergood.init({
      clientId: process.env.SUPERGOOD_CLIENT_ID,
      clientSecret: process.env.SUPERGOOD_CLIENT_SECRET,
      config: {
        useRemoteConfig: false,
        useTelemetry: false,
      },
    });

    res.on('finish', async () => {
      await Supergood.close();
    });

    next();
  }
}
