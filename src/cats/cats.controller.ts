import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { Observable, of } from 'rxjs';
import { CatsService } from './cats.service';
import { Cat } from './cat.entity';
import { CatDto, CreateCatDto, UpdateCatDto, ListAllEntities } from './cats.dto';

@ApiBearerAuth()
@ApiTags('cats')
@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) { }

    @Post()
    @ApiOperation({ summary: 'Create cat' })
    @ApiResponse({
        description: 'Create record',
        type: Cat,
    })
    async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
        return this.catsService.create(createCatDto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all cats' })
    @ApiResponse({
        description: 'Found records',
        type: [Cat],
    })
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a one cat' })
    @ApiResponse({
        description: 'Found record',
        type: Cat,
    })
    async findOne(@Param('id') id: number): Promise<Cat> {
        return this.catsService.findOne(id);
    }
    // @Post()
    // create(@Body() createCatDto: CreateCatDto): Observable<string> {
    //     return of(this.catsService.create(createCatDto));
    // }

    // @Get()
    // findAll(@Query() query: ListAllEntities): Observable<string> {
    //     return of(this.catsService.findAll(query));
    // }

    // @Get(':id')
    // findOne(@Param('id') id: string): Observable<string> {
    //     return of(this.catsService.findOne(id));
    // }

    // @Put(':id')
    // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto): Observable<string> {
    //     return of(this.catsService.update(id, updateCatDto));
    // }

    // @Delete(':id')
    // remove(@Param('id') id: string): Observable<string> {
    //     return of(this.catsService.remove(id));
    // }

}
