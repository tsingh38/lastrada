import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from './shop/header/header.component';
import { FooterComponent } from './shop/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './shop/catalog/navbar/navbar.component';
import { NotFoundComponent } from './shop/catalog/not-found/not-found.component';
import { CartComponent } from './shop/catalog/cart/cart.component';
import { CustomerInformationComponent } from './shop/customer-information/customer-information.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CartService } from './services/cart.service';
import { CustomerInformationService } from './shop/customer-information/CustomerInformationService';
import { OrdersuccessfulComponent } from './shop/ordersuccessful/ordersuccessful.component';
import { MealComponent } from './shop/meal/meal.component';
import { MealService } from './services/mealservice';
import { DetailWindowComponent } from './shop/meal/detail-window/detail-window.component';

const appRoutes: Routes = [
  {
    path: 'shop', component: ShopComponent, children: [
      { path: ':id', component: MealComponent }
    ]
  },{
    path: 'customer',canActivate:[AuthGuardService], component:CustomerInformationComponent},
   {path: 'completed',canActivate:[AuthGuardService], component:OrdersuccessfulComponent},
  {
    path: '', redirectTo: '/shop', pathMatch:'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    NotFoundComponent,
    CartComponent,
  CustomerInformationComponent,
  OrdersuccessfulComponent,
  MealComponent,
  DetailWindowComponent
  ],
  imports: [
    BrowserModule, NgbModule, RouterModule, FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuardService,CartService,CustomerInformationService,MealService],
  bootstrap: [AppComponent]
})
export class AppModule { }
