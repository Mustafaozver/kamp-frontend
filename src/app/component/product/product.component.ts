import { CartService } from './../../services/cart.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Category } from './../../models/category';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:Product[]=[];
  dataLoaded=false;
  filterText="";

  // productResponseModel:ProductResponseModel={
  //   data:this.products,
  //   message:"",
  //   success:true
  // };
//ActivatedRoute aktifleştirilmiş route yani mevcut route

  constructor(private productService:ProductService,
              private activatedRoute:ActivatedRoute,
              private toastrService:ToastrService,
              private cartService:CartService){}

  ngOnInit(): void {
  this.activatedRoute.params.subscribe(params=>{
    if(params["categoryId"]){
      this.getProductsByCategory(params["categoryId"])
    }else{
      this.getProducts()
    }
  })
}

  getProducts(){
    this.productService.getProducts().subscribe(response =>
      {
        this.products=response.data;
        this.dataLoaded=true;
      })

  }
  getProductsByCategory(categoryId:number){
    this.productService.getProductsByCategory(categoryId).subscribe(response =>
      {
        this.products=response.data;
        this.dataLoaded=true;
      })

  }
  addToCart(product:Product){
      this.toastrService.success("Sepete eklendi",product.productName)
      this.cartService.addToCart(product);
  }

}
