import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { PizzaUnit } from '../../pizzaunit.model';
import { PizzaAdditions } from '../../pizzaAdditions.model';
import { PizzaSizes } from '../../Pizzasizes.model';
import { PizzaUnitService } from '../../pizzaunitservice';
import { NgForm } from '@angular/forms';
import { ItemOrder } from '../../itemorder.model';
import { DeepcopyUtil } from 'src/app/shop/Deepcopy';


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
  selectedSize: string = this.defaultSize;
  allPizzaSizes: PizzaSizes[] = [];
  allPizzaItems: PizzaUnit[] = [];
  allPizzaAdditions: PizzaAdditions[] = [];
  listOfCheckedPizzaAdditions: PizzaAdditions[] = [];
  openMealsByIndex: Boolean[] = [];
  show = 3;

  orderedPizza:ItemOrder= {
    id: '',
    pizza:null,
    name: '',
    size: '',
    listOfAdditions: null,
    quantity: 0,
    totalPrice: 0
  }

  @ViewChild('f', { static: false }) formReference: NgForm;
  constructor(private pizzaService: PizzaUnitService) { }

  ngOnInit() {
    console.log("something " + this.pizza.pizzaName);
    this.allPizzaAdditions = this.pizzaService.fetchAllPizzaAdditions();
    this.allPizzaSizes = this.pizzaService.fetchAllPizzaSizes();
  }

  ngDoCheck() {
    this.priceOnButton = this.pizzaService.calculateTotalPriceForAUnit(this.pizza, this.selectedSize, this.listOfCheckedPizzaAdditions, this.selectedQuantity);
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

  onSubmit() {
    this.orderedPizza.id = this.pizza.pizzaId;
    var localPizza:PizzaUnit =DeepcopyUtil.deepCopy(this.pizza);
    this.orderedPizza.pizza=localPizza;
    this.orderedPizza.name = this.pizza.pizzaName;
    this.orderedPizza.quantity = this.selectedQuantity;
    this.orderedPizza.size = this.selectedSize;
    var  locallistOfPizzaAdditions:PizzaAdditions[]  =DeepcopyUtil.deepCopy(this.listOfCheckedPizzaAdditions);
    this.orderedPizza.listOfAdditions = locallistOfPizzaAdditions;
    this.orderedPizza.totalPrice = this.priceOnButton;
    this.pizzaService.emitOrder( this.orderedPizza);

  }

  fetchPriceForSelectedAddition(pizzaAddition: PizzaAdditions, selectedPizza: any, selectedPizzaSize: HTMLSelectElement, event: Event) {
    if ((<HTMLInputElement>event.target).checked) {
      this.listOfCheckedPizzaAdditions.push(pizzaAddition);
    }
    else if (!(<HTMLInputElement>event.target).checked) {
      if (this.listOfCheckedPizzaAdditions.length > 0) {
        for (let pizzaAdditions of this.listOfCheckedPizzaAdditions) {
          if (pizzaAdditions.id === pizzaAddition.id) {
            this.listOfCheckedPizzaAdditions.splice(this.listOfCheckedPizzaAdditions.indexOf(pizzaAddition), 1);
          }
        }
      }
    }
  }

}
