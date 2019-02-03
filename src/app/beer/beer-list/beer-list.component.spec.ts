import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerListComponent } from './beer-list.component';
import { BeerModule } from '../beer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BeerListComponent', () => {
  let component: BeerListComponent;
  let fixture: ComponentFixture<BeerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule, BeerModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerListComponent);
    component = fixture.componentInstance;
    component.items = [
      {
        name: 'name1',
        description: 'description1'
      },
      {
        name: 'name2',
        description: 'description2'
      },
      {
        name: 'name3',
        description: 'description3'
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render beer-list-item components', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('app-beer-list-item').length).toEqual(3);
  });
});
