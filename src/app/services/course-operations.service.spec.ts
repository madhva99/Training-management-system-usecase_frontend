import { TestBed } from '@angular/core/testing';

import { CourseOperationsService } from './course-operations.service';

describe('CourseOperationsService', () => {
  let service: CourseOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
