import { Injectable } from '@angular/core';
import { VideoCourseItem } from '../../model/video-course-item';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

const VIDEO_COURCES = 'courses';
const VIDEO_COURCE = 'course';

@Injectable()

export class VideoCoursesServiceService {
  private videoCourseSource: VideoCourseItem[];
  constructor(private http: HttpClient) { }

  public getVideoCourses(page: number, count: number, searchText: string): Observable<VideoCourseItem[]> {
    const params: HttpParams = new HttpParams()
                                  .set('page', page.toString())
                                  .set('count', count.toString())
                                  .set('searchText', searchText);
    return this.http.get<VideoCourseItem[]>(`${environment.SERVER_URL}/${VIDEO_COURCES}`, { params } );
  }

  public getAllVideoCourses() {
    return this.videoCourseSource;
  }

  public getVideoCoursesById(id: number): Observable<VideoCourseItem> {
    const params: HttpParams = new HttpParams()
                                  .set('id', id.toString());
    return this.http.get<VideoCourseItem>(`${environment.SERVER_URL}/${VIDEO_COURCE}/${id}`);
  }

  public createVideoCourseItem(item: VideoCourseItem): Observable<VideoCourseItem[]> {
    return this.http.post<VideoCourseItem[]>(`${environment.SERVER_URL}/${VIDEO_COURCES}`, item);
  }

  public removeVideoCourseItem(item: VideoCourseItem): Observable<number> {
    const params: HttpParams = new HttpParams()
                                .set('id', item.id.toString());

    return this.http.delete<number>(`${environment.SERVER_URL}/${VIDEO_COURCES}`, {params} );
  }

  public updateVideoCourceItem(item: VideoCourseItem): Observable<VideoCourseItem[]> {
    return this.http.put<VideoCourseItem[]>(`${environment.SERVER_URL}/${VIDEO_COURCES}`, item);
  }
}
