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
import { CartComponent } from './shop/cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { ShopService } from './shop/shopservices/shopService';
import { FormsModule } from '@angular/forms';

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
    CatalogComponent,
    CatalogUnitComponent,
    DropdownDirective,
    CartComponent
  ],
  imports: [
    BrowserModule,NgbModule,RouterModule,FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
