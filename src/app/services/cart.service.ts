import { Injectable } from '@angular/core';

import { Training } from '../model/training.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Training[] = [];

  constructor() { }

  // Methode pour ajouter les éléments dans le panier
  addTraining(training: Training): void {
    this.cart.push(training);
  
  }

  getCustomer(): { name: string; firstName: string; address: string; phone: string; email: string } {
    return { name: '', firstName: '', address: '', phone: '', email: '' }; 
  }
}
