import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
} from '@nestjs/common';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        console.log('HttpExceptionFilter ' + new Date().toLocaleString());

        const ctx: HttpArgumentsHost = host.switchToHttp();
        const response: Response = ctx.getResponse<Response>();
        const request: Request = ctx.getRequest<Request>();
        const status: number = exception.getStatus();

        response.status(status).json({
            filter: 'HttpExceptionFilter',
            statusCode: status,
            timestamp: new Date().toLocaleString(), // timestamp: new Date().toISOString(),
            path: request.url,
        });
    }
}
