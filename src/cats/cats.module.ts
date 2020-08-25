import {Module} from '@nestjs/common';
import {CatsController} from './cats.controller';
import {CatsService} from './cats.service';
import{ APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './logging.intercept';

@Module({
  controllers: [CatsController],
  providers: [
    CatsService,
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: LoggingInterceptor
    // }
  ],
  // 放入export后 就可以几个模块之间共享CatsService实例
  exports: [CatsService]
})

export class CatsModule {}