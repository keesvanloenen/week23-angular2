import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'filter',
  pure: true,
})
export class FilterPipe<T extends { name: string }> implements PipeTransform {
  transform(elements: T[], search?: string) {
    if (!Array.isArray(elements) || !search) {
      return elements;
    }
    return elements.filter((element: T) => {
      return element.name.toLowerCase().includes(search.toLowerCase());
    });
  }
}