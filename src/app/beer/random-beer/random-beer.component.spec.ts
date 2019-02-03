import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RandomBeerComponent } from './random-beer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BeerModule } from '../beer.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppConfigModule } from 'src/app/app-config.module';
import { BeerService } from '../beer.service';
import { DebugElement } from '@angular/core';

describe('RandomBeerComponent', () => {
  let component: RandomBeerComponent;
  let fixture: ComponentFixture<RandomBeerComponent>;
  let debugElement: DebugElement;
  let beerService: BeerService;
  let getRandomBeerSpy;
  let getRandomNonAlcoBeerSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule, SharedModule, AppConfigModule, BeerModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomBeerComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;

    beerService = debugElement.injector.get(BeerService);
    getRandomBeerSpy = spyOn(beerService, 'getRandomBeer').and.callThrough();
    getRandomNonAlcoBeerSpy = spyOn(beerService, 'getRandomNonAlcoBeer').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call beer service getRandomBeer method on button click', () => {
    debugElement
      .query(By.css('button.random-beer-button'))
      .triggerEventHandler('click', null);

    expect(getRandomBeerSpy).toHaveBeenCalled();
  });

  it('should call beer service getBeersWithDescription method on search click', () => {
    debugElement
      .query(By.css('button.random-non-alco-button'))
      .triggerEventHandler('click', null);

    expect(getRandomNonAlcoBeerSpy).toHaveBeenCalled();
  });
});
