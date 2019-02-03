import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerLayoutComponent } from './beer-layout/beer-layout.component';

@NgModule({
  declarations: [
    BeerListComponent,
    BeerLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    BeerListComponent,
    BeerLayoutComponent
  ]
})
export class BeerModule { }
