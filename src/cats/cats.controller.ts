import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable, of } from 'rxjs';
import { CatsService } from './cats.service';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) { }

    @Post()
    create(@Body() createCatDto: CreateCatDto): Observable<string> {
        return of(this.catsService.create(createCatDto));
    }

    @Get()
    findAll(@Query() query: ListAllEntities): Observable<string> {
        return of(this.catsService.findAll(query));
    }

    @Get(':id')
    findOne(@Param('id') id: number): Observable<string> {
        return of(this.catsService.findOne(id));
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateCatDto: UpdateCatDto): Observable<string> {
        return of(this.catsService.update(id, updateCatDto));
    }

    @Delete(':id')
    remove(@Param('id') id: number): Observable<string> {
        return of(this.catsService.remove(id));
    }

}
