import { Controller, Get, Query, Redirect } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): Observable<string> {
        return of(this.appService.getHello());
    }
}
