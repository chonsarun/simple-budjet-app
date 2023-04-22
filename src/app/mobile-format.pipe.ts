import { Pipe, PipeTransform } from '@angular/core';
import { mobileFormat } from './mobile-format';

@Pipe({
  name: 'mobileFormat'
})
export class MobileFormatPipe implements PipeTransform {

  transform(value: string): string {
    return mobileFormat(value);
  }

}
