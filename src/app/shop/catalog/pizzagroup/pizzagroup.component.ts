import { Component, OnInit, ViewChild } from '@angular/core';
import { PizzaUnit } from '../pizzaunit.model';
import { PizzaService } from '../pizza.service';
import { PizzaAdditions } from '../pizzaAdditions.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pizzagroup',
  templateUrl: './pizzagroup.component.html',
  styleUrls: ['./pizzagroup.component.scss']
})
export class PizzagroupComponent implements OnInit {
  openMealsByIndex: Boolean[] = [];
  defaultSize='Normal 28';
  allPizzaSizes: String[] = [];
  allPizzaItems: PizzaUnit[] = [];
  allPizzaAdditions: PizzaAdditions[] = [];
  @ViewChild('f', { static: true }) formReference: NgForm;
  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.allPizzaItems = this.pizzaService.fetchAllPizzas();
    this.allPizzaAdditions = this.pizzaService.fetchAllPizzaAdditions();
    this.allPizzaSizes = this.pizzaService.fetchAllPizzaSizes();
  }

  compareFn(c1: String, c2: String): boolean {
    console.log("c1" +c1+" c2"+c2);
    console.log("c1 === c2 "+c1 === c2);
    return  c1 === c2;
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

}
