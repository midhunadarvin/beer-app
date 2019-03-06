import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, forkJoin } from 'rxjs';
import { APP_CONFIG, AppConfig } from '../../app-config.module';
import * as csv from 'csvtojson';
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  public listSubject = new Subject();
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig) { }

  public getRespositories() {
    this.http.get(this.config.apiEndpoint + '/repositories')
      .subscribe((response: any) => {
          this.listSubject.next(response);
      });
  }

  public getFromCsv() {
    this.http.get('/assets/restaurants.csv', { responseType: 'text' })
      .subscribe((response: any) => {
        csv().fromString(response)
          .then((csvRow) => {
            this.listSubject.next(csvRow);
          });
      });
  }
}
