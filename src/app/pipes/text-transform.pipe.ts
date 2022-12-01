import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'textTransform',
  pure: true
})
export class TextTransformPipe implements PipeTransform {

  transform(value: any, codeNumber: any) {
    return codeNumber + ' ' + value;
  }

}
