import { Injectable } from '@angular/core';

import { Training } from '../model/training.model';

import { CustomerComponent } from '../compoents/customer/customer.component';

import { OrderComponent } from '../compents/order/order.component';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Training[] = [];
  hashMap = new Map<number, Training>();
 
  customer = { name: '', firstName: '', address: '', phone: '', email: '' };

  constructor() { 
    this.storageCart(); // initialisation 
    this.loadCustomer();
  }

  // Methode pour ajouter les éléments dans le panier
  addTraining(training: Training): void {
    if (!this.hashMap.has(training.id)){
      this.cart.push(training)
      this.hashMap.set(training.id, training);}
   // this.cart.push(training);}
    this.saveCart(); // sauvegarde dans local storage
  }

  // Methode retourne la liste de tous les éléments stockés dans le panier
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

  // initialise panier dans local storage pour récupérer les données
  private storageCart(): void {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      this.cart = JSON.parse(cartData);
    } 
    //else {return null;} si on remplace void par any
  }

  //getOrder() {
   // console.log('ok');
  //}

  clear() : void {
    this.cart = [];
    this.hashMap.clear();
    this.saveCart();
  }

  getAmount(): number {
    return this.cart.reduce((total, training) => total + training.price, 0);
  }

  getCustomer() : Customer {
    return this.customer;
  }

  saveCustomer(customer : Customer) : void{
    this.customer = customer;
    localStorage.setItem('customer', JSON.stringify(this.customer))
  }

  private loadCustomer() : void{
    const customerData = localStorage.getItem('customer');
    if (customerData) {
      this.cart = JSON.parse(customerData);
    }
  }
}
