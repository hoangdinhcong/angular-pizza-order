import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';

import { GlobalErrorHandler } from './global-error-handler';
import { HttpErrorInterceptor } from './http-error.interceptor';

@NgModule({
    declarations: [],
    imports: [],
    providers: [
        { provide: ErrorHandler, useClass: GlobalErrorHandler },
        { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
    ]
})
export class ErrorHandlerModule { }
