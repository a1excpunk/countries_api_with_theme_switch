import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comma',
  standalone: true
})
export class CommaPipe implements PipeTransform {

  transform(element: string, arrayLength: number, elementIndex: number): string {
    if (arrayLength > 1 && elementIndex !== arrayLength - 1) {
      return element + ", "
    } else {
      return element;
    }
  }
}
