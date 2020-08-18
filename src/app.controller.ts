import { Controller, Get, Req, HttpCode, Header, Redirect, Param,HostParam } from '@nestjs/common';
import { AppService } from './app.service';
import {Request} from 'express';

@Controller('cats/all')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get(':id')
  // @Redirect('https://www.baidu.com', 302)
  @Header('X-Powered-By', 'chentao')
  getAllCats(@Param('id') params): string {
    return this.appService.getHello() + `${params}`;
  }
}

@Controller({ host: ':account.example.com' })
export class AccountController {
  @Get()
  getInfo(@HostParam('account') account: string) {
    return account;
  }
}

