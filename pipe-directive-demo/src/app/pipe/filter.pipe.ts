import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, key: string, phrase: string): any { // melyik adat alapján milyen kifejezéssel
    return value.filter(item => {
      // return item.gender; // ha az item elé ! jel kerül, akkor a nőket fogja megjeleníteni, enélkül a férfiakat
    // null nem jó return-nek, nekünk ide a tömb kéne a szűrt adatokkal
    return item[key].toLowerCase().indexOf(phrase.toLowerCase()) > -1;
    }); 
  }

}
