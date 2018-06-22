import { TestBed, inject } from '@angular/core/testing';

import { VideoCoursesServiceService } from './video-courses-service.service';

describe('VideoCoursesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoCoursesServiceService]
    });
  });

  it('should be created', inject([VideoCoursesServiceService], (service: VideoCoursesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
