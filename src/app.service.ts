import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(params): string {
    console.log(params);
    return 'this is all cats list';
  }
}
