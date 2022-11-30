import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMyEvent]'
})
export class MyEventDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.changeColor("#6699ff")
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.changeColor('')
  }

  private changeColor(color: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, "color", color);
  }

}
