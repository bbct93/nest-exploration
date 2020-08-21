import {PipeTransform, Injectable, ArgumentMetadata, BadRequestException} from '@nestjs/common';
import { ObjectSchema} from '@hapi/joi';

// 验证传参管道
@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}
  transform(value: any, metadata: ArgumentMetadata) {
    const {error} = this.schema.validate(value);
    if(error) {
      throw new BadRequestException('Validation Failed')
    }

    return value
  }
}