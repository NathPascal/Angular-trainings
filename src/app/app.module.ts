import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingsComponent } from './compoents/trainings/trainings.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './compoents/cart/cart.component';
import { OrderComponent } from './compents/order/order.component';
import { CustomerComponent } from './compoents/customer/customer.component';
import { NotFoundComponent } from './compoents/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingsComponent,
    CartComponent,
    OrderComponent,
    CustomerComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
