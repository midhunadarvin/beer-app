import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchType = 'name';
  public searchText: string;
  public searchMode = false;
  public filteredOptions: Observable<string[]>;
  public searchControl = new FormControl();
  @Input() public title;
  @Input() public searchModels;
  @Input() public options;
  @Output() public searchCallback = new EventEmitter<any>();
  @Output() public clearCallback = new EventEmitter<any>();

  public ngOnInit() {
  }

  onSearch() {
    if (this.searchText) {
      this.searchMode = true;
      this.searchCallback.next({
        type: this.searchType,
        text: this.searchText
      });
    }
  }

  clearSearch() {
    this.searchMode = false;
    this.searchText = '';
    this.clearCallback.next(true);
  }
}
