import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    Post,
    Put,
    Query,
    Req,
    Res,
    UseFilters,
} from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { Request, Response } from 'express';
import { Observable, of } from 'rxjs';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';
import { CatsService } from './cats.service';
import { CreateCatDto, UpdateCatDto, ListAllEntities, CatDto } from './dto';
import { Cat } from './entity';

@ApiBearerAuth()
@ApiTags('cats')
@Controller('cats')
// @UseFilters(new HttpExceptionFilter())
export class CatsController {
    constructor(private readonly service: CatsService) {}

    @Post()
    async create(@Body() dto: CatDto) {
        this.service.create(dto);
    }

    @Get()
    async findAll(): Promise<CatDto[]> {
        return this.service.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<CatDto> {
        return this.service.findOne(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() dto: CatDto,
    ): Promise<CatDto> {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<CatDto[]> {
        return this.service.remove(id);
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
    // update(
    //     @Param('id') id: string,
    //     @Body() updateCatDto: UpdateCatDto,
    // ): Observable<string> {
    //     return of(this.catsService.update(id, updateCatDto));
    // }

    // @Delete(':id')
    // remove(@Param('id') id: string): Observable<string> {
    //     return of(this.catsService.remove(id));
    // }
}
