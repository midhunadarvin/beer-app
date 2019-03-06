import { TestBed } from '@angular/core/testing';

import { RestaurantService } from './restaurant.service';
import { SharedModule } from '../shared.module';
import { AppConfigModule } from '../../app-config.module';

describe('RestaurantService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      AppConfigModule,
      SharedModule
    ]
  }));

  it('should be created', () => {
    const service: RestaurantService = TestBed.get(RestaurantService);
    expect(service).toBeTruthy();
  });
});
