import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerSearchComponent } from './beer-search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BeerModule } from '../beer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppConfigModule } from 'src/app/app-config.module';

describe('BeerSearchComponent', () => {
  let component: BeerSearchComponent;
  let fixture: ComponentFixture<BeerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        AppConfigModule,
        SharedModule,
        BeerModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
