import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(text: string, length: number = 17, suffix: string = '...'): string {
    if (!text) {
      console.log(text);
      return '...';
    }
    if (text.length > length) {
      let truncated: string = text.substring(0, length).trim() + suffix;
      return truncated;
    }
    return text;
  }
}
