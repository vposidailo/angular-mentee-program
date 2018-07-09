import { Pipe, PipeTransform } from '@angular/core';
import { VideoCourseItem } from '../model/video-course-item';

@Pipe({
  name: 'videoCourceOrder'
})
export class VideoCourceOrderPipe implements PipeTransform {

  transform(value: any, args?: any): VideoCourseItem[] {
    if(args === 'undefined' || args === "" || args === "asc")
    {
      return value.sort(function(itemA, itemB){return itemA.Creationdate - itemB.Creationdate});
    }
    else if(args === "desc")
    {
      return value.sort(function(itemA, itemB){return itemB.Creationdate - itemA.Creationdate});
    }
  }
}