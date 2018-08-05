import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    if (value < 60) {
      return value % 60 + 'min';
    }

    return ((value - value % 60) / 60) + 'h ' + value % 60 + 'min';
  }
}
