import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el : ElementRef) {
    el.nativeElement.style.backgroundColor = 'orange';
    el.nativeElement.style.color = 'white';
   }
 
   
     @HostListener("mouseover")
     onMouseOver(){
      this.el.nativeElement.style.backgroundColor = 'yellow';
     this.el.nativeElement.style.color = 'red';
   }

     @HostListener ("mouseout")
     onMouseOut(){
     this.el.nativeElement.style.backgroundColor = 'orange';
      this.el.nativeElement.style.color = 'white';
    
   }
   
}
