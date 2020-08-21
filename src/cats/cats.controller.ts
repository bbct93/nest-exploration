import { Controller, Get, Post, Body, HttpException, HttpStatus, UseFilters, UsePipes } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { CatInterface } from './interfaces/cat.interface';
import {HttpExceptionFiler} from './http-exception.filer';
import {ForbiddenException} from './forbidden.exception';
import { AllExceptionsFilter } from './any-exception.filter';
import { ValidationPipe} from './validate.pipe';

@Controller('cats')
export class CatsController {
  constructor(private catsSerivce: CatsService){}

  @Post()
  // 捕获指定异常
  // @UseFilters(AllExceptionsFilter)
  @UsePipes(ValidationPipe)
  async create(@Body() createCatDto: CreateCatDto) {
    // throw new AllExceptionsFilter();
    // console.log('body',createCatDto);
    this.catsSerivce.create(createCatDto);
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