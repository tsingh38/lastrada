import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from './shop/header/header.component';
import { FooterComponent } from './shop/footer/footer.component';
import { CatalogComponent } from './shop/catalog/catalog.component';
import { CatalogUnitComponent } from './shop/catalog/catalog-unit/catalog-unit.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    HeaderComponent,
    FooterComponent,
    CatalogComponent,
    CatalogUnitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
