import { Directive, ElementRef, HostListener, Input,} from '@angular/core';

@Directive({
  selector: '[appTestcaseDirective]',
  standalone: true
})
export class TestcaseDirectiveDirective {
  @Input() customColor!:string;
  
  constructor(private _elemet: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter()
  {
    this.highlight('skyblue')
  }
  
  @HostListener('mouseleave') onMouseLeave()
  {
    this.highlight(' ')
  }
  private highlight (color : string) {
    this._elemet.nativeElement.style.backgroundColor= color
  }
}
