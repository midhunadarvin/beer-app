import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerListItemComponent } from './beer-list-item.component';
import { SharedModule } from '../../shared/shared.module';

describe('BeerListItemComponent', () => {
  let component: BeerListItemComponent;
  let fixture: ComponentFixture<BeerListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [
        BeerListItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerListItemComponent);
    component = fixture.componentInstance;
    component.data = {
      name: 'List Item Name',
      description: 'List Item Description'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render "name" in a div tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.item-name').textContent).toContain('List Item Name');
  });

  it('should render "description" in a div tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.item-description').textContent).toContain('List Item Description');
  });
});
