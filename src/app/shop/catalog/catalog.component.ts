import { Component, OnInit } from '@angular/core';
import { Unit } from './catalog-unit/unit.model';
import { ShopService } from '../shopservices/shopService';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  allItems:Unit[]=[new Unit(1,"kebab","Delicious Kebab","https://www.foodtempel.de/wp-content/uploads/2019/05/D%C3%B6ner-Kebab-Pita-mit-Krautsalat-678x470.jpg","11.00"),
  new Unit(2,"Pizza","Delicious Kebab","https://www.foodtempel.de/wp-content/uploads/2019/05/D%C3%B6ner-Kebab-Pita-mit-Krautsalat-678x470.jpg","6.99"),
  new Unit(3,"Butter chickern","Delicious Kebab","https://www.foodtempel.de/wp-content/uploads/2019/05/D%C3%B6ner-Kebab-Pita-mit-Krautsalat-678x470.jpg","32"),
                  new Unit(4,"Tee Chai","Delicious Kebab","https://www.foodtempel.de/wp-content/uploads/2019/05/D%C3%B6ner-Kebab-Pita-mit-Krautsalat-678x470.jpg","12")];
 //allItems:Unit[]=[new Unit("kebab","beste kebab im welt",".../images/Doener.jpg")];

 constructor(private shopService:ShopService) { }

  ngOnInit() {
  }





}
 