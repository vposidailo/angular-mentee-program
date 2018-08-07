import { Injectable } from '@angular/core';
import { VideoCourseItem } from '../../model/video-course-item';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const VIDEO_COURSE_SERVICE_URL = 'http://localhost:3004/courses';

@Injectable()

export class VideoCoursesServiceService {
  private videoCourseSource: VideoCourseItem[];
  constructor(private http: HttpClient) { }

  public getVideoCourses(page: number, count: number, searchText: string): Observable<VideoCourseItem[]> {
    const params: HttpParams = new HttpParams()
                                  .set('page', page.toString())
                                  .set('count', count.toString())
                                  .set('searchText', searchText);
    return this.http.get<VideoCourseItem[]>(`${VIDEO_COURSE_SERVICE_URL}`, {params} );
  }

  public getAllVideoCourses() {
    return this.videoCourseSource;
  }

  public getVideoCoursesById(id: number): VideoCourseItem {
    return this.videoCourseSource.find(element => element.id === id);
  }

  public createVideoCourseItem(item: VideoCourseItem): VideoCourseItem[] {
    item.id = this.videoCourseSource.length + 1;
    this.videoCourseSource.push(item);
    return this.videoCourseSource;
  }

  public removeVideoCourseItem(item: VideoCourseItem): Observable<number> {
    const params: HttpParams = new HttpParams()
                                .set('id', item.id.toString());

    return this.http.delete<number>(`${VIDEO_COURSE_SERVICE_URL}`, {params} );
    // const removedItemIndex = this.videoCourseSource.findIndex(arrItem => arrItem.id === item.id);
    // this.videoCourseSource.splice(removedItemIndex, 1);

    // return this.videoCourseSource;
  }

  public updateVideoCourceItem(item: VideoCourseItem): VideoCourseItem[] {
    const updateItemIndex = this.videoCourseSource.findIndex(arrItem => arrItem.id === item.id);

    if (updateItemIndex === -1) {
      return this.videoCourseSource;
    }

    this.videoCourseSource[updateItemIndex] = item;
    return this.videoCourseSource;
  }

  public checkIfSourceHaveMoreElements(length: number): boolean {
    return length <= this.videoCourseSource.length;
  }
}
