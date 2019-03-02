import { Component, OnInit } from '@angular/core';
import { Beer } from '../models/beer';
import { RestaurantService } from '../../shared/services/restaurant.service';
@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  public beerList: Array<Beer> = [];
  public randomBeer: Beer;
  constructor(private beerService: RestaurantService) { }

  ngOnInit() {
    this.subscribeRandomBeer();
    this.subscribeBeerList();
    this.beerService.getBeersList();
    this.beerService.getRandomBeer();
  }

  subscribeRandomBeer() {
    this.beerService.randomBeerSubject
      .subscribe((response: Beer) => {
        this.randomBeer = response;
      });
  }

  subscribeBeerList() {
    this.beerService.beersListSubject
      .subscribe((response: Array<Beer>) => {
        this.beerList = response;
      });
  }
}
