import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppConfigModule } from 'src/app/app-config.module';

import { SearchComponent } from './search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BaseModule } from '../../../base/base.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestaurantService } from '../../services/restaurant.service';

describe('BeerSearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let debugElement: DebugElement;
  let beerService: RestaurantService;
  let getBeersWithNameSpy;
  let getBeersWithDescriptionSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        AppConfigModule,
        SharedModule,
        BaseModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;

    beerService = debugElement.injector.get(RestaurantService);
    getBeersWithNameSpy = spyOn(beerService, 'getBeersWithName').and.callThrough();
    getBeersWithDescriptionSpy = spyOn(beerService, 'getBeersWithDescription').and.callThrough();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render search button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button.search-button')).toBeTruthy();
  });

  it('should call beer service getBeersWithName method on search click', () => {
    component.searchType = 'name';
    debugElement
      .query(By.css('button.search-button'))
      .triggerEventHandler('click', null);

    expect(getBeersWithNameSpy).toHaveBeenCalled();
  });

  it('should call beer service getBeersWithDescription method on search click', () => {
    component.searchType = 'description';
    debugElement
      .query(By.css('button.search-button'))
      .triggerEventHandler('click', null);

    expect(getBeersWithDescriptionSpy).toHaveBeenCalled();
  });
});
