import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceCharacter'
})
export class ReplaceCharacterPipe implements PipeTransform {

  transform(value: string, replaceWith:string): string {
    return value.replace('-',replaceWith);
  }

}
