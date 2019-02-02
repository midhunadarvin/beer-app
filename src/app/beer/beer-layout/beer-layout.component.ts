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

  onSearch(event) {
    if (event.searchType === 'name') {
      this.beerService.getBeersWithName(event.searchText);
    } else if (event.searchType === 'description') {
      this.beerService.getBeersWithDescription(event.searchText);
    }
  }
}
