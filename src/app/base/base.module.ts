import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomBeerComponent } from './random-beer/random-beer.component';
import { SharedModule } from '../shared/shared.module';
import { BaseLayoutComponent } from './base-layout/base-layout.component';

@NgModule({
  declarations: [
    RandomBeerComponent,
    BaseLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RandomBeerComponent,
    BaseLayoutComponent
  ]
})
export class BaseModule { }
