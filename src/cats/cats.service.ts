import { Injectable } from '@nestjs/common';
import { CatDto, CreateCatDto, ListAllEntities, UpdateCatDto } from './dto';
import { Cat } from './entity';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        //: Cat[]
        this.cats.push(cat);
        //return this.cats;
        //vyresit id
    }

    findAll(): Cat[] {
        return this.cats;
    }

    findOne(id: number): Cat {
        return this.cats[id]; // zatim podle indexu
    }

    update(id: number, dto: CatDto): Cat {
        return (this.cats[id] = dto);
    }

    remove(id: number): Cat[] {
        this.cats.splice(id, 1);
        return this.cats;
    }

    // create(createCatDto: CreateCatDto): string {
    //     return 'Adds a new cat';
    // }

    // findAll(query: ListAllEntities): string {
    //     // return `Returns all cats, limit: ${query.limit} items`;
    //     return `Returns all cats, limit: ${query.limit} items`;
    // }

    // findOne(id: number): string {
    //     return `Returns a #${id} cat`;
    // }

    // update(id: string, updateCatDto: UpdateCatDto): string {
    //     return `Updates a #${id} cat`;
    // }

    // remove(id: string): string {
    //     return `Removes a #${id} cat`;
    // }
}
