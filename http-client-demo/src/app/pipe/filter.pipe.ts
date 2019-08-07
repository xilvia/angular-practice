import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(baseArray: any, phrase: string = ''): any {
    return baseArray.filter(item => {
      let jsonString = JSON.stringify(item)
        .replace(/"[^"]*"\:/g, '')
        .replace(/[",\{\}]/g, '');  // ezzel most az objektum kulcsaira szűrök, hogy ne vegye figyelembe a ""-ket, ,-ket
      // ez így már csak a nyers adatra szűr
      return jsonString.toLowerCase().indexOf(phrase.toLocaleLowerCase()) > -1;
    });
  }
}
  
