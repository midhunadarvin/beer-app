import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  @Input() items: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
