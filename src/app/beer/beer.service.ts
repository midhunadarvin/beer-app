import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { APP_CONFIG, AppConfig } from '../app-config.module';
@Injectable({
  providedIn: 'root'
})
export class BeerService {
  public randomBeerSubject = new Subject();
  public beersListSubject = new Subject();
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig) { }

  getBeersList() {
    this.http.get(`${this.config.apiEndpoint}/beers`)
      .subscribe((response: any) => {
        this.beersListSubject.next(response);
      });
  }

  getRandomBeer() {
    this.http.get(`${this.config.apiEndpoint}/beers/random`)
      .subscribe((response: any) => {
        this.randomBeerSubject.next(response);
      });
  }
}
