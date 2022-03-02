import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlighter]'
})
export class BetterHighlighterDirective implements OnInit{
  @Input() defaultColor : string = 'transaparent';
  @Input('appBetterHighlighter') highlightColor : string = 'red';
  @HostBinding('style.backgroundColor') backgroundColor : string;

  constructor(private elRef:ElementRef, private renderer:Renderer2) {

   }
  ngOnInit(): void {
    //this.renderer.setStyle(this.elRef.nativeElement,"background-color","cyan");
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(){
    //this.renderer.setStyle(this.elRef.nativeElement,"background-color","cyan");
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(){
    // this.renderer.setStyle(this.elRef.nativeElement,"background-color","transparent");
    this.backgroundColor = this.defaultColor;
  }

}
