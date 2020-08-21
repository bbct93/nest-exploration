import { Controller, Get, Req, HttpCode, Header, Redirect, Param,HostParam, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import {CatsService} from './cats/cats.service';
import {CatInterface} from './cats/interfaces/cat.interface';
import {Request} from 'express';

@Controller('cats/all')
export class AppController {
  constructor(
    // 注入 provider
    private readonly appService: AppService,
    private readonly catsService: CatsService
  ) {}
  @Get()
  // @Redirect注解可以使前端重定向到一个网页  使用场景：跳转登陆
  // @Redirect('https://www.baidu.com', 302)
  //  配置响应头header
  @Header('X-Powered-By', 'chentao')
  getAllCats(@Param('id') params): string {
    return this.appService.getHello('xxx') + `${params}`;
  }

  @Get('catService')
  async getCatService(): Promise<CatInterface[]> {
    return this.catsService.findAll()
  }
}


@Controller({ host: ':account.example.com' })
export class AccountController {
  @Get()
  getInfo(@HostParam('account') account: string) {
    return account;
  }
}

