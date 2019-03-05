import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() data: any;
  @Input() layoutTemplate: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }

}
