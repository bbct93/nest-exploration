import { IsInt, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCatDto {
  @IsString()
  @MinLength(3, {
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