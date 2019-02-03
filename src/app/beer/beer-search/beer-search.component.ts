import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beer-search',
  templateUrl: './beer-search.component.html',
  styleUrls: ['./beer-search.component.css']
})
export class BeerSearchComponent implements OnInit {
  public searchType = 'name';
  public searchText: string;

  constructor(private beerService: BeerService) { }

  ngOnInit() {
  }

  onSearch() {
    if (this.searchType === 'name') {
      this.beerService.getBeersWithName(this.searchText);
    } else if (this.searchType === 'description') {
      this.beerService.getBeersWithDescription(this.searchText);
    }
  }
}
