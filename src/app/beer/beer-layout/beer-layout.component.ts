import { Component, OnInit } from '@angular/core';
import { Beer } from '../models/beer';
import { BeerService } from '../beer.service';
@Component({
  selector: 'app-beer-layout',
  templateUrl: './beer-layout.component.html',
  styleUrls: ['./beer-layout.component.css']
})
export class BeerLayoutComponent implements OnInit {
  public beerList: Array<Beer>;
  public randomBeer: Beer;
  constructor(public beerService: BeerService) { }

  ngOnInit() {
    this.subscribeBeerList();
    this.beerService.getBeersList();
  }

  subscribeBeerList() {
    this.beerService.beersListSubject
      .subscribe((response: Array<Beer>) => {
        this.beerList = response;
      });
  }
}
