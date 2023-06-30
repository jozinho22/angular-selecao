import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[playerPositionBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = "#C0C0C0";
  private defaultColor: string = "#994C00";

  constructor(private el: ElementRef) { 
    this.setBorder(this.initialColor);
  }

  @Input('playerPositionBorderCard') borderColor: string; 

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  private setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
