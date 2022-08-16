import { ApiProperty } from '@nestjs/swagger';

export class Cat {
  /**
   * The name of the Cat
   * @example Kitty
   */

  @ApiProperty({
    example: "Mačka",
    //description: 'Name of Cat'
  })
  name: string;

  @ApiProperty({
    example: 1,
    //description: 'Age of Cat'
  })
  age: number;

  @ApiProperty({
    example: 'Maine Coon',
    //description: 'Breed of Cat',
  })
  breed: string;
}