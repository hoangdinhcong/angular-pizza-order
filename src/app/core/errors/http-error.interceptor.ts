import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ErrorDialogService } from '../../shared/errors/error-dialog.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private errorDialogService: ErrorDialogService,
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {

                console.error('Error from error interceptor', error);
                this.errorDialogService.open(error.message ?? JSON.stringify(error), error.status);
                return throwError(error);
            })
        );
    }
}
