import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/poem/:word')
  async createPoem(@Param('word') word:string): Promise<string> {
    return this.appService.createPoem(word);
  }

  @Get('/dog/:name')
  async nameMyDog(@Param('name') name:string): Promise<string> {
    return this.appService.nameMyDog(name);
  }

  @Get('/ip')
  async getIp(): Promise<string> {
    return this.appService.getIp();
  };
}
