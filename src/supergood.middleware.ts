import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import Supergood from 'supergood';

@Injectable()
export class SupergoodMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    
    res.on('finish', async () => {
      await Supergood.close();
    });

    next();
  }
}
