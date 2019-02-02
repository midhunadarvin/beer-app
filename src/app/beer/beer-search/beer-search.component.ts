import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-beer-search',
  templateUrl: './beer-search.component.html',
  styleUrls: ['./beer-search.component.css']
})
export class BeerSearchComponent implements OnInit {
  public searchType = 'name';
  public searchText: string;

  @Output() searchClick = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onSearch() {
    this.searchClick.emit({
      searchText: this.searchText,
      searchType: this.searchType
    });
  }
}
