import { Pipe, PipeTransform } from '@angular/core';
import { VideoCourseItem } from '../model/video-course-item';

@Pipe({
  name: 'videoCourceOrder'
})
export class VideoCourceOrderPipe implements PipeTransform {

  transform(value: any, field?: any, order?: any): VideoCourseItem[] {
    if (typeof field === 'undefined' || field === '') {
      return value;
    }

    return value.sort((itemA, itemB) => this.orderBy(itemA[field], itemB[field], order.toLowerCase()));
  }

  private orderBy(itemA: any, itemB: any, order: string): any {
    if (typeof itemA === 'undefined' || typeof itemB === 'undefined') {
      return 0;
    }

    if (typeof order === 'undefined' || order === '' || order === 'asc') {
        return itemA - itemB;
    } else if (order === 'desc') {
        return itemB - itemA;
    }
  }
}
