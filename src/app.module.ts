import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, CreateCatDto } from './app.service';
import {CatsService} from './cats.service';
import {CatsController} from './cats.controller'

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, CreateCatDto, CatsService],
})
export class AppModule {}
