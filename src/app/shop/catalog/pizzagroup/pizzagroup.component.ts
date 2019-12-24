import { Component, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges, SimpleChange, DoCheck } from '@angular/core';
import { PizzaUnit } from '../pizzaunit.model';
import {PizzaGroupService } from '../pizzagroup.service';
import { PizzaAdditions } from '../pizzaAdditions.model';
import { NgForm } from '@angular/forms';
import { PizzaSizes } from '../Pizzasizes.model';

@Component({
  selector: 'app-pizzagroup',
  templateUrl: './pizzagroup.component.html',
  styleUrls: ['./pizzagroup.component.scss']
})
export class PizzagroupComponent implements OnInit {
  openMealsByIndex: Boolean[] = [];
  selectedQuantity: Number = 1;
  priceOnButton: Number = 0;
  defaultSize = 'Normal 28';
  allPizzaSizes: PizzaSizes[] = [];
  allPizzaItems: PizzaUnit[] = [];
  allPizzaAdditions: PizzaAdditions[] = [];
  listOfCheckedPizzaAdditions:PizzaAdditions[]=[];
  show = 3;

  @ViewChild('f', { static: true }) formReference: NgForm;
  constructor(private pizzaGroupService: PizzaGroupService) { }

  ngOnInit() {
    this.allPizzaItems = this.pizzaGroupService.fetchAllPizzas();
   
  }


}
