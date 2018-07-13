import { Pipe, PipeTransform } from '@angular/core';
import { VideoCourseItem } from '../model/video-course-item';

@Pipe({
  name: 'videoCourceOrder'
})
export class VideoCourceOrderPipe implements PipeTransform {

  transform(value: any, field?: any, order?: any): VideoCourseItem[] {
    console.log(field);
    console.log(order);
    if (typeof field === 'undefined' || field === '') {
      return value;
    }

    switch (field.toLowerCase()) {
        case 'id':
          return value.sort((itemA, itemB) => this.orderBy(itemA.id, itemB.id, order));
        case 'duration':
          return value.sort((itemA, itemB) => this.orderBy(itemA.Duration, itemB.Duration, order));
        default:
          return value.sort((itemA, itemB) => this.orderBy(itemA.Creationdate, itemB.Creationdate, order));
    }
  }

  private orderBy(itemA: any, itemB: any, order: string): any {
    if (typeof order === 'undefined' || order === '' || order === 'asc') {
        return itemA - itemB;
    } else if (order === 'desc') {
        return itemB - itemA;
    }
  }
}
