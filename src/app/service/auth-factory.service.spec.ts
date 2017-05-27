import { TestBed, inject } from '@angular/core/testing';

import { AuthFactoryService } from './auth-factory.service';

describe('AuthFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthFactoryService]
    });
  });

  it('should be created', inject([AuthFactoryService], (service: AuthFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
