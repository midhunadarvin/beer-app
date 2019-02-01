import { Component, OnInit } from '@angular/core';
import { BeerService } from '../beer.service';
@Component({
  selector: 'app-beer-layout',
  templateUrl: './beer-layout.component.html',
  styleUrls: ['./beer-layout.component.css']
})
export class BeerLayoutComponent implements OnInit {
  private beerList: any = [];
  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.beerService.getBeersList()
      .subscribe((response: any) => {
        this.beerList = response;
      });
  }

}
