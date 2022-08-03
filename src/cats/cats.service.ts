import { Injectable } from '@nestjs/common';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './dto';

@Injectable()
export class CatsService {

    create(createCatDto: CreateCatDto): string {
        return 'Adds a new cat';
    }

    findAll(query: ListAllEntities): string {
        return `Returns all cats, limit: ${query.limit} items`;
    }

    findOne(id: number): string {
        return `Returns a #${id} cat`;
    }

    update(id: number, updateCatDto: UpdateCatDto): string {
        return `Updates a #${id} cat`;
    }

    remove(id: number): string {
        return `Removes a #${id} cat`;
    }
}
