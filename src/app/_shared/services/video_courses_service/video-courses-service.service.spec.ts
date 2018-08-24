import { TestBed, inject } from '@angular/core/testing';

import { VideoCoursesServiceService } from './video-courses-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('VideoCoursesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [VideoCoursesServiceService]
    });
  });

  it('should be created', inject([VideoCoursesServiceService], (service: VideoCoursesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
