import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes',
  standalone: true
})
export class PipesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if( value!==undefined && value!=='' && value!==null){
      return value;
     }else{
      return "empty data";
     }
 

}
}