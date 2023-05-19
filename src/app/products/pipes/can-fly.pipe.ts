import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {

  //transform(value: any, ...args: any[]): any {

    transform(value: boolean): 'vuela'|'No vuela' {
      console.log({value});

      return value? 'vuela':'No vuela';


  }
}
