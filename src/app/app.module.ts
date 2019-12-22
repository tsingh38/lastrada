import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from './shop/header/header.component';
import { FooterComponent } from './shop/footer/footer.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { CartComponent } from './shop/cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './shop/catalog/navbar/navbar.component';
import { DynamicWidthOfElementDirective } from './directives/dynamic-width-of-element.directive';

const appRoutes:Routes=[
  {path:'home',component:ShopComponent},
  {path:'*',component:ShopComponent},
  {path:'*.*',component:ShopComponent},
  {path: '',component:ShopComponent},
{path:'cart', component:CartComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    HeaderComponent,
    FooterComponent,
    DropdownDirective,
    CartComponent,
    NavbarComponent,
    DynamicWidthOfElementDirective
  ],
  imports: [
    BrowserModule,NgbModule,RouterModule,FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
