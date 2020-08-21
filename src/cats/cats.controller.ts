import { Controller, Get, Post, Body, HttpException, HttpStatus, UseFilters } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { CatInterface } from './interfaces/cat.interface';
import {HttpExceptionFiler} from './http-exception.filer';
import {ForbiddenException} from './forbidden.exception'

@Controller('cats')
export class CatsController {
  constructor(private catsSerivce: CatsService){}

  @Post()
  @UseFilters(new HttpExceptionFiler())
  async create(@Body() createCatDto: CreateCatDto) {
    throw new ForbiddenException();
    // console.log('body',createCatDto);
    // this.catsSerivce.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<CatInterface[]> {
    // return this.catsSerivce.findAll()
    // 异常
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'this is a custom message'
    }, HttpStatus.FORBIDDEN)
  }
}