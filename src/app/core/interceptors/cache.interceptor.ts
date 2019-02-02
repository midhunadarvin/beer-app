import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpEvent, HttpRequest, HttpResponse, HttpInterceptor, HttpHandler } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { RequestCacheService } from '../services/request-cache.service';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
    private spinnerCount = 0;
    constructor(private cache: RequestCacheService, private spinner: NgxSpinnerService) { }

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
            tap(event => {
                if (event instanceof HttpResponse) {
                    cache.put(req, event);
                    this.spinnerCount--;
                    if (this.spinnerCount === 0) {
                        this.spinner.hide();
                    }
                }
            })
        );
    }
}
