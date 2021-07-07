import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class Capitalize implements PipeTransform {
  transform(value: string) {
    if (value) {
      const arrNames = value.split(' ');
      const newArrName = arrNames.map((element) =>
        element.trim() === '' ? '' : element[0].toUpperCase() + element.substr(1));
      return newArrName.join(' ');
    }
    return value;
  }
}
