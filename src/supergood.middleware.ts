import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import Supergood from 'supergood';

Supergood.init({
  clientId: process.env.SUPERGOOD_CLIENT_ID,
  clientSecret: process.env.SUPERGOOD_CLIENT_SECRET,
  config: {
    useRemoteConfig: false,
    useTelemetry: false,
  },
});

@Injectable()
export class SupergoodMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    res.on('finish', async () => {
      await Supergood.waitAndFlushCache();
    });
    next();
  }
}
