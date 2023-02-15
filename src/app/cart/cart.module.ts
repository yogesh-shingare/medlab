import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';




@NgModule({
  declarations: [
    CartComponent,
    BookingDetailsComponent,
    ConfirmOrderComponent,
    // BookingDetailsComponent,
    // ConfirmOrderComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ReactiveFormsModule
  ]
})
export class CartModule { }
