import { Component, OnInit } from '@angular/core';
import { PizzaUnit } from '../pizzaunit.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CatalogService } from './catalogservice';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  const:String='';

  constructor(private router:Router,private activatedRoute :ActivatedRoute ) { }

  ngOnInit() {

  }


}
