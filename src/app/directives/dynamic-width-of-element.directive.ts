import { Directive, ElementRef, OnInit, ViewChild } from '@angular/core';

@Directive({
  selector: '[appDynamicWidthOfElement]'
})
export class DynamicWidthOfElementDirective implements OnInit  {
  constructor(private eleref : ElementRef) { }

  ngOnInit(){
    var localElementRef=this.eleref.nativeElement.parentElement.parentElement;
    console.log(localElementRef);
    var child_node=localElementRef.querySelector('li:nth-child(2)');
    console.log(child_node);
  
    //console.log(localElementRef.get(''));
  }


 //   var input = document.querySelector('input'); // get the input element
   // input.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
  //  resizeInput.call(input); // immediately call the function
  //this.pizzaInput.toArray()[i].nativeElement.disabled = false;
  

}
