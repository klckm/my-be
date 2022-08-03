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

    findOne(id: string): string {
        return `Returns a #${id} cat`;
    }

    update(id: string, updateCatDto: UpdateCatDto): string {
        return `Updates a #${id} cat`;
    }

    remove(id: string): string {
        return `Removes a #${id} cat`;
    }
}
