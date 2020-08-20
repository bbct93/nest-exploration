import {Controller, Get, Post, Body} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { CatInterface } from './cat.interface';


@Controller('cats')
export class CatsController {
  constructor(private catsSerivce: CatsService){}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    console.log('body',createCatDto);
    this.catsSerivce.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<CatInterface[]> {
    return this.catsSerivce.findAll()
  }
}