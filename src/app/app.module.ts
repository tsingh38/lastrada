import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from './shop/header/header.component';
import { FooterComponent } from './shop/footer/footer.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './shop/catalog/navbar/navbar.component';
import { DynamicWidthOfElementDirective } from './directives/dynamic-width-of-element.directive';
import { ShopService } from './shop/shopservice';
import { PizzagroupComponent } from './shop/catalog/pizzagroup/pizzagroup.component';
import { IndischgroupComponent } from './shop/catalog/indischgroup/indischgroup.component';
import { SalatgroupComponent } from './shop/catalog/salatgroup/salatgroup.component';
import { DrinkgroupComponent } from './shop/catalog/drinkgroup/drinkgroup.component';
import { AllmealsgroupComponent } from './shop/catalog/allmealsgroup/allmealsgroup.component';
import { NotFoundComponent } from './shop/catalog/not-found/not-found.component';
import { CatalogComponent } from './shop/catalog/catalog/catalog.component';
import { PizzaunitComponent } from './shop/catalog/pizzagroup/pizzaunit/pizzaunit.component';
import { CartComponent } from './shop/catalog/cart/cart.component';
import { CustomerInformationComponent } from './shop/customer-information/customer-information.component';
import { AuthGuardService } from './auth-guard.service';
import { CartService } from './shop/catalog/cart/cart.service';

const appRoutes: Routes = [
  {
    path: 'shop', component: ShopComponent, children: [
      { path: '', component: AllmealsgroupComponent },
      { path: 'Pizza', component: PizzagroupComponent },
      { path: 'Indisch', component: IndischgroupComponent },
      { path: 'Salat', component: SalatgroupComponent },
      { path: 'Drink', component: DrinkgroupComponent },
      { path: '**', component: NotFoundComponent }
    ]
  },{path: 'customer',canActivate:[AuthGuardService], component:CustomerInformationComponent},{
  path: '', redirectTo: '/shop', pathMatch:'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    HeaderComponent,
    FooterComponent,
    DropdownDirective,
    NavbarComponent,
    DynamicWidthOfElementDirective,
    IndischgroupComponent,
    SalatgroupComponent,
    PizzagroupComponent,
    DrinkgroupComponent,
    AllmealsgroupComponent,
    NotFoundComponent,
    CatalogComponent,
    CartComponent,
    PizzaunitComponent,
  CustomerInformationComponent
  ],
  imports: [
    BrowserModule, NgbModule, RouterModule, FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [ShopService,AuthGuardService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
