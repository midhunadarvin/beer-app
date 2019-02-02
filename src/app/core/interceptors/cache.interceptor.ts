import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpEvent, HttpRequest, HttpResponse, HttpInterceptor, HttpHandler, HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { retry, catchError } from 'rxjs/operators';

import { RequestCacheService } from '../services/request-cache.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
    private spinnerCount = 0;
    constructor(
        private cache: RequestCacheService,
        private spinner: NgxSpinnerService,
        private toastr: ToastrService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const cachedResponse = this.cache.get(req);
        return cachedResponse ? of(cachedResponse) : this.sendRequest(req, next, this.cache);
    }

    sendRequest(
        req: HttpRequest<any>,
        next: HttpHandler,
        cache: RequestCacheService): Observable<HttpEvent<any>> {
        this.spinnerCount++;
        if (this.spinnerCount === 1) {
            this.spinner.show();
        }
        this.spinner.show();
        return next.handle(req).pipe(
            retry(1),
            tap(event => {
                if (event instanceof HttpResponse) {
                    cache.put(req, event);
                    this.spinnerCount--;
                    if (this.spinnerCount === 0) {
                        this.spinner.hide();
                    }
                }
            }),
            catchError((error: HttpErrorResponse) => {
                let errorMessage = '';
                if (error.error instanceof ErrorEvent) {
                    // client-side error
                    errorMessage = `Error: ${error.error.message}`;
                } else {
                    // server-side error
                    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                }
                this.spinner.hide();
                this.toastr.error('Something went wrong!', 'Error');
                return throwError(errorMessage);
            })
        );
    }
}
