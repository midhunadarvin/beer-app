import { TestBed } from '@angular/core/testing';

import { BeerService } from './beer.service';
import { SharedModule } from '../shared/shared.module';
import { AppConfigModule } from '../app-config.module';

describe('BeerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      AppConfigModule,
      SharedModule
    ]
  }));

  it('should be created', () => {
    const service: BeerService = TestBed.get(BeerService);
    expect(service).toBeTruthy();
  });
});
