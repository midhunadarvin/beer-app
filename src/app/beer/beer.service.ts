import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, forkJoin, of, interval } from 'rxjs';
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

  getBeersWithName(param) {
    this.http.get(`${this.config.apiEndpoint}/beers?beer_name=${param}`)
      .subscribe((response: any) => {
        this.beersListSubject.next(response);
      });
  }

  getBeersWithDescription(param) {
    const tasksList = [];
    const resultArray = [];
    for (let i = 1; i <= 3; i++) {
      tasksList.push(this.http.get(`${this.config.apiEndpoint}/beers?page=${i}&per_page=80`));
    }
    forkJoin(tasksList)
      .subscribe((response: any) => {
        for (const result of response) {
          for (const item of result) {
            if (item.description.includes(param)) {
              resultArray.push(item);
            }
          }
        }
        this.beersListSubject.next(resultArray);
      });
  }

  getRandomBeer() {
    const randomPage = Math.floor(Math.random() * 10) + 1;
    this.http.get(`${this.config.apiEndpoint}/beers?page=${randomPage}`)
      .subscribe((response: any) => {
        const randomIndex = Math.floor(Math.random() * response.length);
        this.randomBeerSubject.next(response[randomIndex]);
      });
  }

  getRandomNonAlcoBeer() {
    this.http.get(`${this.config.apiEndpoint}/beers?abv_lt=1`)
      .subscribe((response: any) => {
        const randomIndex = Math.floor(Math.random() * response.length);
        this.randomBeerSubject.next(response[randomIndex]);
      });
  }
}
