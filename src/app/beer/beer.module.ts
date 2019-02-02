import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomBeerComponent } from './random-beer/random-beer.component';
import { SharedModule } from '../shared/shared.module';
import { BeerSearchComponent } from './beer-search/beer-search.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerListItemComponent } from './beer-list-item/beer-list-item.component';
import { BeerLayoutComponent } from './beer-layout/beer-layout.component';

@NgModule({
  declarations: [
    RandomBeerComponent,
    BeerSearchComponent,
    BeerListComponent,
    BeerListItemComponent,
    BeerLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RandomBeerComponent,
    BeerSearchComponent,
    BeerListComponent,
    BeerListItemComponent,
    BeerLayoutComponent
  ]
})
export class BeerModule { }
