import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterPipe',
  standalone: true
})
export class CharacterPipePipe implements PipeTransform {

  transform(value: string): string {
    if(value) {
      return value.substring(0, 2);
    } else {
      return '';
    }
  }

}
