import { Directive,OnInit,ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2 ) {}
  @Input() defaultColor: string = 'red';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;  
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.renderer.setStyle(this.elRef.nativeElement,
    //            'background-color', 'yellow');
  }

  @HostListener('mouseover') mouseover(eventData: Event){
   // this.renderer.setStyle(this.elRef.nativeElement,
   //   'background-color', 'yellow');
   this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
   // this.renderer.setStyle(this.elRef.nativeElement,
   //   'background-color', 'blue');
   this.backgroundColor = this.defaultColor;
  }
}
 