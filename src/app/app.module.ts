import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { CategoryComponent } from './component/category/category.component';
import { NaviComponent } from './component/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipe } from './pipes/filter.pipe';

import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './component/cart-summary/cart-summary.component';
<<<<<<< HEAD
import { ProductAddComponent } from './component/product-add/product-add.component';
=======
>>>>>>> 1481d9c309ef3af0ec49e5d689b298e8fa1ba6c3

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipe,
<<<<<<< HEAD
    CartSummaryComponent,
    ProductAddComponent
=======
    CartSummaryComponent
>>>>>>> 1481d9c309ef3af0ec49e5d689b298e8fa1ba6c3
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
