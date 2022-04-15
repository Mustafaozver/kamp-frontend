import { ToastrService } from 'ngx-toastr';
import { Product } from './../../models/product';
import { CartService } from './../../services/cart.service';
import { CartItem } from './../../models/cartItem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[]=[];
  constructor(private cartService:CartService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
  this.getCart();
  }


  getCart(){
    this.cartItems=this.cartService.list();
  }

  removeFromCart(product:Product){
    this.cartService.removeFromCart(product);
<<<<<<< HEAD
    this.toastrService.error("Silindi",product.productName+ "sepetten silindi.");
=======
    this.toastrService.error("Silindi",product.productName);
>>>>>>> 1481d9c309ef3af0ec49e5d689b298e8fa1ba6c3
  }
}
