import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from './shop/header/header.component';
import { FooterComponent } from './shop/footer/footer.component';
import { CatalogComponent } from './shop/catalog/catalog.component';
import { CatalogUnitComponent } from './shop/catalog/catalog-unit/catalog-unit.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { QuantitydropdownComponent } from './utilComponents/quantitydropdown/quantitydropdown.component';
import { SizedropdownComponent } from './utilComponents/sizedropdown/sizedropdown.component';
import { CartComponent } from './shop/cart/cart.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {path:'',component:AppComponent},
  {path:'\cart', component:CartComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    HeaderComponent,
    FooterComponent,
    CatalogComponent,
    CatalogUnitComponent,
    DropdownDirective,
    QuantitydropdownComponent,
    SizedropdownComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,NgbModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
