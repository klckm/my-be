import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
    imports: [],
    controllers: [CatsController],
    providers: [CatsService],
    exports: [CatsService], //share an instance of the CatsService and internal providers
})
export class CatsModule {}
