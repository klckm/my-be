import { IsInt, IsString } from 'class-validator';

export class CatDto {
  // @IsInt()
  // readonly id: number;

  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;;
}

export class CreateCatDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;
}

export class UpdateCatDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;
}

export class ListAllEntities {
  @IsInt()
  limit: number
}
