import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[indeterminate]',
})
export class IndeterminateCheckboxDirective {
  @Input() set indeterminate(value: boolean) {
    this._elementRef.nativeElement.indeterminate = value;
    console.log(value);
  }

  constructor(private _elementRef: ElementRef) {}
}
