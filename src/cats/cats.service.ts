import { Injectable } from '@nestjs/common';
import { Cat } from './cat.entity';
import { CatDto, CreateCatDto, ListAllEntities, UpdateCatDto } from './cats.dto';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = []

    create(cat: CatDto): Cat {
        this.cats.push(cat);
        return cat
    }

    findAll(): Cat[] {
        return this.cats;
    }

    findOne(id: number): Cat {
        return this.cats[id];
    }
    
    // create(createCatDto: CreateCatDto): string {
    //     return 'Adds a new cat';
    // }

    // findAll(query: ListAllEntities): string {
    //     return `Returns all cats, limit: ${query.limit} items`;
    // }

    // findOne(id: string): string {
    //     return `Returns a #${id} cat`;
    // }

    // update(id: string, updateCatDto: UpdateCatDto): string {
    //     return `Updates a #${id} cat`;
    // }

    // remove(id: string): string {
    //     return `Removes a #${id} cat`;
    // }
}
