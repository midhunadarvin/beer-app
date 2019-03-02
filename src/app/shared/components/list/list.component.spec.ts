import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { BaseModule } from '../../../base/base.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule, BaseModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
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
