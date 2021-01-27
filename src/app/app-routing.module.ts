import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPaymentInfoComponent } from './components/add-payment-info/add-payment-info.component';
import { PaymentInfoListComponent } from './components/payment-info-list/payment-info-list.component';

const routes: Routes = [
  { path: '', component: PaymentInfoListComponent },
  { path: 'add', component: AddPaymentInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
