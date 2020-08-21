import {Module} from '@nestjs/common';
import {CatsController} from './cats.controller';
import {CatsService} from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  // 放入export后 就可以几个模块之间共享CatsService实例
  exports: [CatsService]
})

export class CatsModule {}