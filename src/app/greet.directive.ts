import { Directive, HostBinding, Input, Attribute } from '@angular/core';

@Directive({
  selector: '[appGreet]'
})
export class GreetDirective {

  constructor(@Attribute('author') public theauthor: string) { }
  
  @Input() appGreet: string = '';
  ngOnInit(): void {
    console.log(this.theauthor);
    
  }

}
