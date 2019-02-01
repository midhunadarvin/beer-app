import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-beer-list-item',
  templateUrl: './beer-list-item.component.html',
  styleUrls: ['./beer-list-item.component.css']
})
export class BeerListItemComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
