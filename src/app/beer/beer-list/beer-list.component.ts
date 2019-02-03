import { Component, OnInit, Input } from '@angular/core';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  @Input() items: Array<any>;
  selected: Array<any> = [];
  columns = [
    {
      name: 'Add to cart',
      width: 30,
      sortable: true,
      canAutoResize: true,
      checkboxable: true
    },
    { name: 'id' },
    { name: 'name' },
    { name: 'abv' },
    { name: 'ounces' },
    { name: 'style' }
  ];
  constructor(private beerService: BeerService) { }

  ngOnInit() {
  }

  onSelect() {
    this.beerService.cartItems = this.selected;
  }
}
