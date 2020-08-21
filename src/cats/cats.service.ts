import { Injectable} from '@nestjs/common';
import { CatInterface } from './interfaces/cat.interface'

@Injectable()
export class CatsService {
  private readonly cats: CatInterface[] = [];

  create(cat: CatInterface) {
    this.cats.push(cat)
    console.log('----->',cat);
  }

  findAll(): CatInterface[] {
    return this.cats
  }
}