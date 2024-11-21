import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './compoents/trainings/trainings.component';
import { CartComponent } from './compoents/cart/cart.component';
import { OrderComponent } from './compents/order/order.component';
import { CustomerComponent } from './compoents/customer/customer.component';
import { NotFoundComponent } from './compoents/not-found/not-found.component';
import { TrainingComponent } from './compoents/training/training.component';
import { UserComponent } from './compoents/user/user.component';
import { UserGuard } from './compoents/user.guard';


const routes: Routes = [
{ path: 'trainings', component : TrainingsComponent}, 
{ path: 'cart', component: CartComponent,
  canActivate : [UserGuard]},
{ path: 'order', component: OrderComponent},
{ path: 'customer', component: CustomerComponent},
{ path: 'user', component: UserComponent},
{ path: 'training', component : TrainingComponent},
{ path: '', redirectTo: 'trainings', pathMatch: 'full'},
{ path: '404', component: NotFoundComponent},
{ path: '**', redirectTo: '/404'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
