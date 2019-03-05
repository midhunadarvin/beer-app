import { Component, OnInit, Input, TemplateRef, ElementRef, ContentChild, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() items: Array<any>;
  @Input() totalItems: number;
  @Input() pageSize: number;
  @ContentChild('listItemTemplate') itemTemplate: TemplateRef<ElementRef>;
  @Output() pageChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onPageChange(event) {
    this.pageChange.next(event);
  }

}
