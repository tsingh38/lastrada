import { Component, OnInit, Input } from '@angular/core';
import { PizzaUnit } from '../../pizzaunit.model';
import { PizzaAdditions } from '../../pizzaAdditions.model';
import { PizzaSizes } from '../../Pizzasizes.model';
import { PizzaUnitService } from '../../pizzaunitservice';

@Component({
  selector: 'app-pizzaunit',
  templateUrl: './pizzaunit.component.html',
  styleUrls: ['./pizzaunit.component.scss']
})
export class PizzaunitComponent implements OnInit {
  @Input() pizza: PizzaUnit;
  selectedQuantity: Number = 1;
  priceOnButton: Number = 0;
  defaultSize = 'Normal 28';
  selectedSize: String=this.defaultSize;
  allPizzaSizes: PizzaSizes[] = [];
  allPizzaItems: PizzaUnit[] = [];
  allPizzaAdditions: PizzaAdditions[] = [];
  listOfCheckedPizzaAdditions: PizzaAdditions[] = [];
  openMealsByIndex: Boolean[] = [];
  show = 3;
  constructor(private pizzaService: PizzaUnitService) { }

  ngOnInit() {
    console.log("something " + this.pizza.pizzaName);
    this.allPizzaAdditions = this.pizzaService.fetchAllPizzaAdditions();
    this.allPizzaSizes = this.pizzaService.fetchAllPizzaSizes();
  }

  ngDoCheck() {
    this.priceOnButton=this.pizzaService.calculateTotalPriceForAUnit(this.pizza,this.selectedSize,this.listOfCheckedPizzaAdditions,this.selectedQuantity);
  }

  increaseTheNumber(selectedPizza: any): Number {
    this.selectedQuantity = Number(this.selectedQuantity) + 1;
    return this.selectedQuantity;
  }
  decreaseTheNumber(selectedPizza: any): Number {
    if (this.selectedQuantity > 1) {
      this.selectedQuantity = Number(this.selectedQuantity) - 1;
    }
    return this.selectedQuantity;
  }

  fetchPizzaPriceForASize() {

  }

  openCollapsedDetailWindow(index: number) {
    this.openMealsByIndex[index] = true;
  }

  openDetailedWindow(index: number): boolean {
    if (this.openMealsByIndex[index] === true) {
      return true;
    }
    return false;
  }

  closeDetailWindow(index: number) {
    this.openMealsByIndex[index] = false;
  }

  displayPizzaAdditionPriceForSelectedPizzaSize(selectedPizzaSize: HTMLSelectElement, currentPizzaAddition: PizzaAdditions) {
    if (selectedPizzaSize.value.length > 0) {
      return this.pizzaService.fetchPriceOfAPizzaAdditionsAccordingToSize(selectedPizzaSize.value, currentPizzaAddition.id);
    }
    return 0;
  }

  pizzaSizeSelected(selectedPizza: PizzaUnit, event: Event) {
    this.selectedSize = (<HTMLTextAreaElement>event.target).value;
  }

  fetchPriceForSelectedAddition(pizzaAddition: PizzaAdditions, selectedPizza: any, selectedPizzaSize: HTMLSelectElement, event: Event) {
    if ((<HTMLInputElement>event.target).checked) {
      this.listOfCheckedPizzaAdditions.push(pizzaAddition);
    }
    else if (!(<HTMLInputElement>event.target).checked) {
      if (this.listOfCheckedPizzaAdditions.length > 0 ) {
        for(let pizzaAdditions of this.listOfCheckedPizzaAdditions){
          if(pizzaAdditions.id===pizzaAddition.id){
            this.listOfCheckedPizzaAdditions.splice(this.listOfCheckedPizzaAdditions.indexOf(pizzaAddition), 1);
          }
        }
      }
    }
  }

}
