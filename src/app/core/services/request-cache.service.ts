import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';

const maxAge = 60000;
@Injectable()
export class RequestCacheService {

    cache = new Map();

    get(req: HttpRequest<any>): HttpResponse<any> | undefined {
        const url = req.urlWithParams;
        const cached = this.cache.get(url);

        if (!cached) {
            return undefined;
        }

        return cached.response;
    }

    put(req: HttpRequest<any>, response: HttpResponse<any>): void {
        const url = req.url;
        const entry = { url, response, lastRead: Date.now() };
        this.cache.set(url, entry);

        const expiredTime = Date.now() - maxAge;
        this.cache.forEach(item => {
            if (item.lastRead < expiredTime) {
                this.cache.delete(item.url);
            }
        });
    }
}
