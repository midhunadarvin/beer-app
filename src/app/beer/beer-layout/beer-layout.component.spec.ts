import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BeerLayoutComponent } from './beer-layout.component';
import { BeerModule } from '../beer.module';
import { AppConfigModule } from 'src/app/app-config.module';
import { SharedModule } from 'src/app/shared/shared.module';

describe('BeerLayoutComponent', () => {
  let component: BeerLayoutComponent;
  let fixture: ComponentFixture<BeerLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        SharedModule,
        AppConfigModule,
        BeerModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
