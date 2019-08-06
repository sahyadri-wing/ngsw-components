import { TestBed } from '@angular/core/testing';

import { NgswComponentsService } from './ngsw-components.service';

describe('NgswComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgswComponentsService = TestBed.get(NgswComponentsService);
    expect(service).toBeTruthy();
  });
});
