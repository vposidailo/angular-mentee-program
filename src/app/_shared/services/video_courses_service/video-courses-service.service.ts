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
    return this.http.get<VideoCourseItem[]>(`${VIDEO_COURSE_SERVICE_URL}`, { params } );
  }

  public getAllVideoCourses() {
    return this.videoCourseSource;
  }

  public getVideoCoursesById(id: number): VideoCourseItem {
    return this.videoCourseSource.find(element => element.id === id);
  }

  public createVideoCourseItem(item: VideoCourseItem): Observable<VideoCourseItem[]> {
    const params = this.convertVideoCourseItemToHttpParams(item);
    return this.http.post<VideoCourseItem[]>(`${VIDEO_COURSE_SERVICE_URL}`, null, { params });
  }

  public removeVideoCourseItem(item: VideoCourseItem): Observable<number> {
    const params: HttpParams = new HttpParams()
                                .set('id', item.id.toString());

    return this.http.delete<number>(`${VIDEO_COURSE_SERVICE_URL}`, {params} );
  }

  public updateVideoCourceItem(item: VideoCourseItem): Observable<VideoCourseItem[]> {

    const params = this.convertVideoCourseItemToHttpParams(item);
    return this.http.put<VideoCourseItem[]>(`${VIDEO_COURSE_SERVICE_URL}`, { params });
  }

  public checkIfSourceHaveMoreElements(length: number): boolean {
    return length <= this.videoCourseSource.length;
  }

  private convertVideoCourseItemToHttpParams(item: VideoCourseItem): HttpParams {
    return new HttpParams()
                    .set('id', item.id.toString())
                    .set('Title', item.Title)
                    .set('Description', item.Description)
                    .set('Duration', item.Duration.toString())
                    .set('Creationdate', item.Creationdate.toString())
                    .set('IsTopRated', item.IsTopRated.toString());
  }
}
