import { Directive, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickCounter]',
  standalone: true
})
export class ClickCounterDirective {
private counter=0;
@HostListener('click',['$event'])onClick(event:Event):void{
  this.counter++;
  console.log('Click Counter: ',this.counter)
}
}
