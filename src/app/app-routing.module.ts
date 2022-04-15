import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductComponent } from './component/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:"",pathMatch:"full",component:ProductComponent},
{path:"product",component:ProductComponent},
{path:"product/category/:categoryId",component:ProductComponent},
{path:"products/add",component:ProductAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
