import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipesss',
  standalone: true
})
export class PipesssPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    if (value !== undefined && value !== '' && value !== null) {
      return value;
    } else {
      return "empty data";
    }

  }

}
