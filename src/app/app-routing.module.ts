import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';


const routes: Routes = [{
  path: 'order-tracking',
  component: OrderTrackingComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
