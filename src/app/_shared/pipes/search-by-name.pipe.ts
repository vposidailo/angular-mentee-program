import { Pipe, PipeTransform } from '@angular/core';
import { VideoCourseItem } from '../model/video-course-item';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(value: any, args?: any): VideoCourseItem[] {
    return value.filter(item => item.Title.toLowerCase().includes(args.toLowerCase()) );
  }
}
