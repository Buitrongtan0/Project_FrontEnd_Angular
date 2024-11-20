import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollControlledText]'
})
export class ScrollControlledTextDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollY = window.scrollY; 
    const start = 1100; // Vị trí bắt đầu
    const end = 2100;   // Vị trí dừng

    if (scrollY >= start && scrollY <= end) {
      const progress = (scrollY - start) / (end - start); 
      const movePercent = progress * 100; 
      this.renderer.setStyle(
        this.el.nativeElement,
        'transform',
        `translateX(-${movePercent}%)`
      );
    } else if (scrollY < start) {
      this.renderer.setStyle(this.el.nativeElement, 'transform', `translateX(0%)`);
    } else if (scrollY > end) {
      this.renderer.setStyle(this.el.nativeElement, 'transform', `translateX(-150%)`);
    }
  }
}
