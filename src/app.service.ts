import { Injectable } from '@nestjs/common';
import { nameMyDog, createPoem } from './utils';

@Injectable()
export class AppService {

  async createPoem(word): Promise<string> {
    const poem = await createPoem(word);
    return poem;
  }

  async nameMyDog(word): Promise<string> {
    const dogName = await nameMyDog(word);
    return dogName;
  }

  async getIp(): Promise<string> {
    const response = await fetch('http://ip-api.com/json');
    const ip = await response.json();
    return ip;
  }
}
