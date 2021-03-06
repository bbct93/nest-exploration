import {PipeTransform, Injectable, ArgumentMetadata, BadRequestException} from '@nestjs/common';
import { validate} from 'class-validator';
import { plainToClass} from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any>{
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if(!metatype || !this.toValidate(metatype)) {
      return value
    }
    // 做类型转换
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if(errors.length > 0) {
      throw new BadRequestException('validate failed')
    }
    return value
  }

  private toValidate(metatype): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}