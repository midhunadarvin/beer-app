import { Component, OnInit } from '@angular/core';
import { Beer } from '../models/beer';
import { GithubService } from '../../shared/services/github.service';
import { LIST_TITLE } from '../../shared/constants/base.constants';
@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  public listTitle = LIST_TITLE;
  public repositoriesList: Array<any> = [];
  public searchResultList: Array<any> = [];
  public searchResultListMaster: Array<any> = [];
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
  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.subscribeList();
    this.githubService.getRespositories();
  }

  public subscribeList() {
    this.githubService.listSubject
      .subscribe((response: Array<Beer>) => {
        this.totalItems = response.length;
        this.repositoriesList = response;
      });
  }

  public onSearch(event) {
    if (event.text) {
      if (event.type === 'name') {
        this.searchMode = true;
      } else if (event.type === 'cuisine') {
        this.searchMode = true;
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
  }

  public onSearchPageChange(event) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = event.pageIndex * event.pageSize + event.pageSize;
  }
}
