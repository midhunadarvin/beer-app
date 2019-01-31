import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomBeerComponent } from './random-beer/random-beer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RandomBeerComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RandomBeerComponent
  ]
})
export class BeerModule { }
