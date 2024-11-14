import { Injectable } from '@angular/core';

import { Training } from '../model/training.model';

import { CustomerComponent } from '../compoents/customer/customer.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Training[] = [];
  customer = { name: '', firstName: '', address: '', phone: '', email: '' };

  constructor() { 
    this.storageCart(); // initialisation 

  }

  // Methode pour ajouter les éléments dans le panier
  addTraining(training: Training): void {
    this.cart.push(training);
    this.saveCart(); // sauvegarde dans local storage
  }

  // Methode tous les éléments dans le panier
  getCartItems(): Training[] {
    return this.cart;
  }

  // Methode pour supprimer un élément
  removeTraining(training: Training): void {
    this.cart = this.cart.filter(item => item.id !== training.id);
    this.saveCart(); //update sauvegarde local storage
  }

  // sauvegarde panier dans local storage
  private saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  // initialise panier dans local storage
  private storageCart(): void {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      this.cart = JSON.parse(cartData);
    }
  }

  getCustomer() {
    return this.customer;
  }

}
