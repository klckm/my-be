import { Logger } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from './cats/pipes/validation.pipe';
import { AllExceptionsFilter } from './filters/all-exceptions.filter';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { LoggerMiddleware } from './mw/logger.middleware';
import {
    SwaggerDocumentOptions,
    ExpressSwaggerCustomOptions,
} from './swagger.options';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(LoggerMiddleware);
    app.useGlobalFilters(new HttpExceptionFilter());
    // app.useGlobalPipes(new ValidationPipe());
    // const { httpAdapter } = app.get(HttpAdapterHost);
    // app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

    const config = new DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addTag('cats')
        .build();

    const options: SwaggerDocumentOptions = {
        operationIdFactory: (controllerKey: string, methodKey: string) =>
            methodKey,
    };

    const document = SwaggerModule.createDocument(app, config, options);
    SwaggerModule.setup('api', app, document);

    await app.listen(3000);
    console.log(`Application is running on: ${await app.getUrl()}/API`);
}
bootstrap();
