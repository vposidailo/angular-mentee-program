import { Pipe, PipeTransform } from '@angular/core';
import { VideoCourseItem } from '../model/video-course-item';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(value: any, args?: any): VideoCourseItem[] {
    console.log("searchVideoCource: " + args);
    console.log("value: " + value);
    console.log(value.filter(item => item.Title.includes(args) ));
    return value.filter(item => item.Title.toLowerCase().includes(args.toLowerCase()) );
  }
}
