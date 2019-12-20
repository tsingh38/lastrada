import { Component, OnInit } from '@angular/core';
import { Unit } from './catalog-unit/unit.model';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  allItems:Unit[]=[new Unit("kebab","Delicious Kebab","https://www.foodtempel.de/wp-content/uploads/2019/05/D%C3%B6ner-Kebab-Pita-mit-Krautsalat-678x470.jpg"),
  new Unit("kebab","Delicious Kebab","https://www.foodtempel.de/wp-content/uploads/2019/05/D%C3%B6ner-Kebab-Pita-mit-Krautsalat-678x470.jpg"),
  new Unit("kebab","Delicious Kebab","https://www.foodtempel.de/wp-content/uploads/2019/05/D%C3%B6ner-Kebab-Pita-mit-Krautsalat-678x470.jpg"),
                  new Unit("kebab","Delicious Kebab","https://www.foodtempel.de/wp-content/uploads/2019/05/D%C3%B6ner-Kebab-Pita-mit-Krautsalat-678x470.jpg")];
 //allItems:Unit[]=[new Unit("kebab","beste kebab im welt",".../images/Doener.jpg")];
 isButtonClicked:boolean; 
 constructor() { }

  ngOnInit() {
    this.isButtonClicked=false;
  }

  processClickOperation(){
    this.isButtonClicked=true;
  }

  resetButtonClicked(){
    this.isButtonClicked=false;
  }

}
 