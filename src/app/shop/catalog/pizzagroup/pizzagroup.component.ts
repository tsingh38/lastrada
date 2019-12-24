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
  allPizzaItems: PizzaUnit[] = [];


  constructor(private pizzaGroupService: PizzaGroupService) { }

  ngOnInit() {
    this.allPizzaItems = this.pizzaGroupService.fetchAllPizzas();
   
  }


}
