import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
              private productService:ProductService,
              private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createProductAddFrom();
  }

  createProductAddFrom(){
this.productAddForm=this.formBuilder.group({
      productName:["",Validators.required],
      unitPrice:["",Validators.required],
      unitsInStock:["",Validators.required],
      categoryId:["",Validators.required]
    })
  }

  add(){
    if(this.productAddForm.valid){
      let productModel=Object.assign({},this.productAddForm.value)
      this.productService.add(productModel).subscribe(response=>{

        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        if(responseError.errors.Errors.length>0){
          this.toastrService.error(responseError.error.Errors,"Doğrulama hatası")
        }

      })
    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }


  }
}




