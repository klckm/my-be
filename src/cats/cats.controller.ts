import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { Observable, of } from 'rxjs';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';

@Controller('cats')
export class CatsController {

    // @Get()
    // findAll(@Req() request: Request): string {
    //     return 'Returns all cats';
    // }
    // @Get()
    // async findAll(): Promise<any[]> {
    //     return [];
    // }
    // @Get()
    //     findAll(): Observable<any[]> {
    //     return of([]);
    // }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return 'Adds a new cat';
    }

    @Get()
    async findAll(@Query() query: ListAllEntities) {
        return `Returns all cats, limit: ${query.limit} items`;
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return `Returns a #${id} cat`;
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `Updates a #${id} cat`;
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return `Removes a #${id} cat`;
    }

}
