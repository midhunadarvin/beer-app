import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BaseModule } from './base/base.module';
import { AppConfigModule } from './app-config.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    BaseModule,
    SharedModule,
    AppConfigModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
