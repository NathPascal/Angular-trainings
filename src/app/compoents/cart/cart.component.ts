import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Training } from 'src/app/model/training.model';
import { Router } from '@angular/router';
import { ModalOrderComponent } from 'src/app/compents/order/modal-order/modal-order.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems : Training[] = [];
  total : number = 0;


  constructor(private cartService : CartService, private router : Router) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  removeFromCart(training: Training): void {
    this.cartService.removeTraining(training);
    this.cartItems = this.cartService.getCartItems(); // update après suppression d'éléments
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.cartItems.reduce((sum, training) => sum + (training.price*training.quantity), 0);
  }

  placeOrder(): void {
    this.router.navigateByUrl('customer');
  }

  

}
