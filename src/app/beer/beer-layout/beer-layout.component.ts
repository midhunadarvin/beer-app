import { Component, OnInit } from '@angular/core';
import { Beer } from '../models/beer';
import { BeerService } from '../beer.service';
@Component({
  selector: 'app-beer-layout',
  templateUrl: './beer-layout.component.html',
  styleUrls: ['./beer-layout.component.css']
})
export class BeerLayoutComponent implements OnInit {
  public beerList: Array<Beer> = [];
  public randomBeer: Beer;
  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.subscribeRandomBeer();
    this.subscribeBeerList();
    this.beerService.getBeersList();
    this.beerService.getRandomBeer();
  }

  subscribeRandomBeer() {
    this.beerService.randomBeerSubject
      .subscribe((response: Array<Beer>) => {
        this.randomBeer = response[0];
      });
  }

  subscribeBeerList() {
    this.beerService.beersListSubject
      .subscribe((response: Array<Beer>) => {
        this.beerList = response;
      });
  }


}
