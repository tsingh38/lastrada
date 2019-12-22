import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDynamicWidthOfElement]'
})
export class DynamicWidthOfElementDirective implements OnInit  {

  constructor(private eleRef: ElementRef) { }

  ngOnInit(){
    console.log(this.eleRef.nativeElement.offsetWidth);
    console.log(this.eleRef.nativeElement.clientWidth);
    console.log(this.eleRef.nativeElement.scrollWidth);

 //   var input = document.querySelector('input'); // get the input element
   // input.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
  //  resizeInput.call(input); // immediately call the function
    
    function resizeInput() {
      this.style.width = this.value.length + "ch";
    }
  }

}
