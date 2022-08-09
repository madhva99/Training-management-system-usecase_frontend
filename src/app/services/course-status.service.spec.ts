import { TestBed } from '@angular/core/testing';

import { CourseStatusService } from './course-status.service';

describe('CourseStatusService', () => {
  let service: CourseStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
