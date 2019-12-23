import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../shopservice';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
menuBarItemsAll:String[]=['Pizza','Indisch','Salat','Italinisch','Drink','AlkohalfreiGetäanke','Pide','Donör','Something1','Someething2','AlkohalfreiGetäanke','Something3','Someething21','Someething25']
menuBarItemsInitView:String[];  
initStartIndex=0;
initNumberOfItemsToShow=5;
isLeftClickEnabled=false;
ifRightClickEnabled=!this.isLeftClickEnabled;
isSearchBarActive=false;

constructor(private shopService : ShopService) {
  this.menuBarItemsInitView=this.updateItemsInView(Number(this.initStartIndex));
 }

  ngOnInit() {
    this.isLeftClickEnabled=this.initStartIndex == 0 ? false:true;
  }

  onLeftClick(){
    if(  this.initStartIndex > 0){
    this.initStartIndex--;
    }
  
    this.menuBarItemsInitView= this.updateItemsInView(this.initStartIndex);
  }

  onRightClick(){
     if((Number(this.initStartIndex)+Number(this.initNumberOfItemsToShow)) < this.menuBarItemsAll.length){
      this.isLeftClickEnabled=true;
      this.initStartIndex++;
    }
  
    this.menuBarItemsInitView= this.updateItemsInView(this.initStartIndex);

 
  }


  activateSearchElement(){
this.isSearchBarActive=true;
  }

  deactivateSearchBar(){
    console.log("searhBar has been deactivated now");
    this.isSearchBarActive=false;
  }

  updateItemsInView(indexStart:number):String[]{
  

    if((Number(this.menuBarItemsAll.length) - Number(this.initStartIndex))<=this.initNumberOfItemsToShow ){
      this.ifRightClickEnabled=false;
      return this.menuBarItemsInitView;
    }
    var updatedList:String[]=[];
    var start=indexStart;
    var end=Number(Number(indexStart)+this.initNumberOfItemsToShow)<=this.menuBarItemsAll.length?Number(Number(indexStart)+this.initNumberOfItemsToShow):this.menuBarItemsAll.length;
    for (let i = start; i <= end ; i++) {
     updatedList.push(this.menuBarItemsAll[i]);
    }
    return updatedList;
  }

}
