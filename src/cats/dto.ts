export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

export class UpdateCatDto { // id?
  name: string;
  age: number;
  breed: string;
}

export class ListAllEntities {
  limit: number // nevim
}