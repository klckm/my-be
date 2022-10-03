import {
    MiddlewareConsumer,
    Module,
    NestModule,
    RequestMethod,
} from '@nestjs/common';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { ValidationPipe } from './cats/pipes/validation.pipe';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { LoggerMiddleware } from './mw/logger.middleware';

@Module({
    imports: [CatsModule],
    controllers: [AppController],
    providers: [
        AppService,
        // {
        //     provide: APP_FILTER,
        //     useClass: HttpExceptionFilter,
        // },
        // {
        //     provide: APP_PIPE,
        //     useClass: ValidationPipe,
        //   },
    ],
})
export class AppModule {}

// export class AppModule implements NestModule {
//     configure(consumer: MiddlewareConsumer) {
//         consumer
//             .apply(LoggerMiddleware)
//             .forRoutes({ path: '*', method: RequestMethod.ALL });
//         // .forRoutes(CatsController);
//     }
// }
