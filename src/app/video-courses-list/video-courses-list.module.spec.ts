import { VideoCoursesListModule } from './video-courses-list.module';

describe('VideoCoursesListModule', () => {
  let videoCoursesListModule: VideoCoursesListModule;

  beforeEach(() => {
    videoCoursesListModule = new VideoCoursesListModule();
  });

  it('should create an instance', () => {
    expect(videoCoursesListModule).toBeTruthy();
  });
});
