import { Component, OnInit } from '@angular/core';
import { Beer } from '../models/beer';
import { RestaurantService } from '../../shared/services/restaurant.service';
@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  public restaurantList: Array<any> = [];
  public searchResultList: Array<any> = [];
  public searchResultListMaster: Array<any> = [];
  public restaurantListMaster: Array<any> = [];
  public totalItems: number;
  public pageSize = 25;
  public searchMode = false;
  public searchModels = [
    {
      name: 'Name',
      value: 'name'
    },
    {
      name: 'Cuisine Style',
      value: 'cuisine'
    }
  ];
  public randomBeer: Beer;
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.subscribeRestaurantList();
    this.restaurantService.getRestaurantsList();
  }

  public subscribeRestaurantList() {
    this.restaurantService.restaurantsListSubject
      .subscribe((response: Array<Beer>) => {
        this.totalItems = response.length;
        this.restaurantListMaster = response;
        this.restaurantList = this.restaurantListMaster.slice(0, this.pageSize).map((item) => {
          item['Cuisine Style'] = item['Cuisine Style'].substring(1, item['Cuisine Style'].length - 1);
          item['Cuisine Style'] = item['Cuisine Style'].split(', ');
          return item;
        });
      });
  }

  public onSearch(event) {
    if (event.text) {
      if (event.type === 'name') {
        this.searchMode = true;
        this.searchResultListMaster = this.restaurantListMaster.filter((item) => {
          return item.Name.includes(event.text);
        });
        this.searchResultList = this.searchResultListMaster.slice(0, 25).map((item) => {
          if (typeof item['Cuisine Style'] === 'string') {
            item['Cuisine Style'] = item['Cuisine Style'].substring(1, item['Cuisine Style'].length - 1);
            item['Cuisine Style'] = item['Cuisine Style'].split(', ');
          }
          return item;
        });
      } else if (event.type === 'cuisine') {
        this.searchMode = true;
        this.searchResultListMaster = this.restaurantListMaster.filter((item) => {
          if (typeof item['Cuisine Style'] === 'string') {
            item['Cuisine Style'] = item['Cuisine Style'].substring(1, item['Cuisine Style'].length - 1);
            item['Cuisine Style'] = item['Cuisine Style'].split(', ');
          }
          return item['Cuisine Style'].indexOf('\'' + event.text  + '\'') > -1;
        });
        this.searchResultList = this.searchResultListMaster.slice(0, 25);
      }

    }
  }

  public onClearSearch() {
    this.searchMode = false;
  }

  public onPageChange(event) {
    this.pageSize = event.pageSize;
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = event.pageIndex * event.pageSize + event.pageSize;
    this.restaurantList = this.restaurantListMaster.slice(startIndex, endIndex).map((item) => {
      item['Cuisine Style'] = item['Cuisine Style'].substring(1, item['Cuisine Style'].length - 1);
      item['Cuisine Style'] = item['Cuisine Style'].split(', ');
      return item;
    });
  }

  public onSearchPageChange(event) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = event.pageIndex * event.pageSize + event.pageSize;
    this.searchResultList = this.searchResultListMaster.slice(startIndex, endIndex).map((item) => {
      item['Cuisine Style'] = item['Cuisine Style'].substring(1, item['Cuisine Style'].length - 1);
      item['Cuisine Style'] = item['Cuisine Style'].split(', ');
      return item;
    });
  }
}
