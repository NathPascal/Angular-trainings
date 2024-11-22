import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  showModal = false;
  //modalTitle = 'Commande confirmée';
  modalContent = 'Votre commande a bien été prise en compte.';
  modalData: any;

  constructor(private cartService: CartService, private router : Router) { }

  ngOnInit(): void {
    this.customer = this.cartService.getCustomer(); 
    this.cartItems = this.cartService.getCartItems(); 
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.cartItems.reduce((sum, training) => sum + (training.price*training.quantity), 0);
  }

  onOrder(){
    this.modalData = this.cartService.getAmount();
    this.showModal = true;
  }

  onModalClose(): void{
    this.showModal = false;
    this.cartService.clear();
    this.router.navigateByUrl('');
    console.log("Back to the future !");
  }

  confirmOrder() {
    this.showModal = true;
    //const confirmation = confirm("Votre commande a été validée !");
    //if (confirmation) {
       // console.log("Commande confirmée !");
   // } else {
        //console.log("Commande non confirmée.");
    //}
  }
}
