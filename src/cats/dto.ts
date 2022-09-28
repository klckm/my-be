import { IsInt, IsString } from 'class-validator';

export class CatDto {
    // @IsInt()
    // readonly id: number;

    @IsString()
    readonly name: string;

    @IsInt()
    readonly age: number;

    @IsString()
    readonly breed: string;
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
    // id?
    @IsString()
    readonly name: string;

    @IsInt()
    readonly age: number;

    @IsString()
    readonly breed: string;
}

export class ListAllEntities {
    // allEntries: {
    //   name: string;
    // }
    @IsInt()
    limit: number; // nevim
}

// export class CreateCatDto {
//   name: string;
//   age: number;
//   breed: string;
// }

// export class UpdateCatDto { // id?
//   name: string;
//   age: number;
//   breed: string;
// }

// export class ListAllEntities {
//   limit: number // nevim
// }
