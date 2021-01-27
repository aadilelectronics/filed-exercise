import { Component, Input } from '@angular/core';
import { PaymentInfo } from 'src/app/models/payment-info.model';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.scss']
})
export class PaymentInfoComponent {
  @Input()
  paymentInfo: PaymentInfo;
}
