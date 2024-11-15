import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  customer: any; 
  cartItems: any[] = [];
  orderNumber: string = '123456'; 
  orderDate: string = new Date().toLocaleDateString();
  total: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.customer = this.cartService.getCustomer(); 
    this.cartItems = this.cartService.getCartItems(); 
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.cartItems.reduce((sum, training) => sum + (training.price*training.quantity), 0);
  }

  confirmOrder() {
    const confirmation = confirm("Votre commande a été validée !");
    if (confirmation) {
        console.log("Commande confirmée !");
    } else {
        console.log("Commande non confirmée.");
    }
}
}
