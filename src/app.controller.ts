import { Controller, Get, Req, HttpCode, Header, Redirect, Param,HostParam, Post, Body } from '@nestjs/common';
import { AppService, CreateCatDto } from './app.service';
import {Request} from 'express';

@Controller('cats/all')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get(':id')
  // @Redirect('https://www.baidu.com', 302)
  @Header('X-Powered-By', 'chentao')
  getAllCats(@Param('id') params): string {
    return this.appService.getHello('xxx') + `${params}`;
  }

}

@Controller('cats/add')
export class CatsController {
  constructor(private readonly catsService: AppService) {}
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);
    this.catsService.getHello(createCatDto);
    return 'This action adds a new cat';
  }
}


@Controller({ host: ':account.example.com' })
export class AccountController {
  @Get()
  getInfo(@HostParam('account') account: string) {

    return account;
  }
}

