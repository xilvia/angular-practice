import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {


  transform(baseArray: any[], key: string = '', direction: number = 1): any {
    if (key === '') {
      return baseArray; //ha semmilyen rendezési elvet nem választott a júzer
    }

    baseArray.sort((a, b) => {
      return (a[key].toString() as string).localeCompare(b[key].toString()) * direction;
    });
    return baseArray;
  }

}
