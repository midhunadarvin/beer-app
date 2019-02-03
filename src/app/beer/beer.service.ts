import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, forkJoin, of, interval } from 'rxjs';
import { APP_CONFIG, AppConfig } from '../app-config.module';
@Injectable({
  providedIn: 'root'
})
export class BeerService {
  public cartItems: Array<any> = [];
  public randomBeerSubject = new Subject();
  public beersListSubject = new Subject();
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig) { }

  getBeersList() {
    this.http.get(`${this.config.apiEndpoint}`)
      .subscribe((response: any) => {
        this.beersListSubject.next(response);
      });
  }
}
