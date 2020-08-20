import { Injectable } from '@nestjs/common';
import {IsString, IsInt, MinLength, MaxLength, }  from 'class-validator';

@Injectable()
export class AppService {
  getHello(params): string {
    console.log(params);
    return 'this is all cats list';
  }
}


export class CreateCatDto {
  @IsString()
  @MinLength(10, {
    message: "Name is too short"
  })
  @MaxLength(50, {
    message: "Name is too long"
  })
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;
}