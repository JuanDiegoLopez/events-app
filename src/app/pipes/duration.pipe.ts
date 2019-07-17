import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})

export class DurationPipe implements PipeTransform{
  transform(value: number): string {
    let durationString = '';
    switch(value) {
      case 1:
        durationString = 'Half Hour';
        break;
      case 2:
        durationString = 'One Hour';
        break;
      case 3:
        durationString = 'Half Day';
        break;
      case 4:
        durationString = 'One Day';
        break;
    }
    return durationString;
  }
}