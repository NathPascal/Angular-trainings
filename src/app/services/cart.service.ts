import { Injectable } from '@angular/core';

import { Training } from '../model/training.model';

import { CustomerComponent } from '../compoents/customer/customer.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Training[] = [];
  customer = { name: '', firstName: '', address: '', phone: '', email: '' };

  constructor() { }

  // Methode pour ajouter les éléments dans le panier
  addTraining(training: Training): void {
    this.cart.push(training);
  
  }

  // Methode tous les éléments dans le panier
  getCartItems(): Training[] {
    return this.cart;
  }

  // Methode pour supprimer un élément
  removeTraining(training: Training): void {
    this.cart = this.cart.filter(item => item.id !== training.id);
  }

  getCustomer() {
    return this.customer;
  }

  //setCustomer(customerData: { name: string; firstName: string; address: string; phone: string; email: string }) {
    //this.customer = customerData;
  //}

}
