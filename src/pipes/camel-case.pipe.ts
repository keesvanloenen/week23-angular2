import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'camelcase', standalone: true })
export class CamelCasePipe implements PipeTransform {
  transform(value: string | undefined): string {
    if (!value) {
      return '';
    }
    const words = value.split(' ');
    let output = '';

    for(const word of words) {
      if (word) {
        output += word[0].toUpperCase() + word.substring(1).toLowerCase();
      }
    }

    return output[0].toLowerCase() + output.substring(1);
  }
}