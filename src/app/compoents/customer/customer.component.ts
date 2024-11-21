import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer.model';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
 
  constructor(public cartService : CartService, private router : Router) {}

  ngOnInit(): void {
  }

  onSaveCustomer (customer: Customer){
    console.log(customer);
  }

  summaryCart(): void{
    this.router.navigateByUrl ('order');
  }
}
