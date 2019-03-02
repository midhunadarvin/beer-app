import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchType = 'name';
  public searchText: string;

  constructor(private beerService: RestaurantService) { }

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
