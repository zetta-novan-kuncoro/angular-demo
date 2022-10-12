import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashierRoutingModule } from './cashier-routing.module';
import { MenuComponent } from './menu/menu.component';
import { PaymentComponent } from './payment/payment.component';
import { CashierComponent } from './cashier/cashier.component';


@NgModule({
  declarations: [
    MenuComponent,
    PaymentComponent,
    CashierComponent
  ],
  imports: [
    CommonModule,
    CashierRoutingModule
  ]
})
export class CashierModule { }
