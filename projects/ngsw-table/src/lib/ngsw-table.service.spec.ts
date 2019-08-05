import { TestBed } from '@angular/core/testing';

import { NgswTableService } from './ngsw-table.service';

describe('NgswTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgswTableService = TestBed.get(NgswTableService);
    expect(service).toBeTruthy();
  });
});
