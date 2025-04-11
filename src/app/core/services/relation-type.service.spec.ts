import { TestBed } from '@angular/core/testing';

import { RelationTypeService } from './relation-type.service';

describe('RelationTypeService', () => {
  let service: RelationTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelationTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
