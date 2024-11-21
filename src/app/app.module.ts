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
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalOrderComponent } from './compents/order/modal-order/modal-order.component';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { TrainingComponent } from './compoents/training/training.component';
import { UserComponent } from './compoents/user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    TrainingsComponent,
    CartComponent,
    OrderComponent,
    CustomerComponent,
    NotFoundComponent,
    ModalOrderComponent,
    TrainingComponent,
    UserComponent
    
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
