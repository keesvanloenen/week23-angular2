import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAutoTab]'
})
export class AutoTabDirective {
  @Input() appAutoTab = '';

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event.target'])
  onInput(input: any) {
    //console.log(input.value.length)
    const length = input.value.length;
    const maxLength = parseInt(input.attributes.maxlength.value);
    
    if (length >= maxLength && this.appAutoTab) {
      console.log('er moet ge-tabbed worden naar: ', this.appAutoTab);
      const field = document.querySelector(`#${this.appAutoTab}`) as HTMLInputElement;

      if(field) {
        field.focus();
      }
    
    }
  }
  
}
