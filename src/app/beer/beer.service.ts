import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from '../app-config.module';
@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig) { }

  getBeersList() {
    return this.http.get(`${this.config.apiEndpoint}/beers`);
  }
}
