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
  show = 3;

  @ViewChild('f', { static: true }) formReference: NgForm;
  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.allPizzaItems = this.pizzaService.fetchAllPizzas();
    this.allPizzaAdditions = this.pizzaService.fetchAllPizzaAdditions();
    this.allPizzaSizes = this.pizzaService.fetchAllPizzaSizes();
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
