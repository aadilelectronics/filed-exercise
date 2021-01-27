import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PaymentInfo } from '../models/payment-info.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  // --------------------------------------------------------------------------
  constructor(private http: HttpClient) {}

  // --------------------------------------------------------------------------
  addPayment(paymentInfo: PaymentInfo): Observable<PaymentInfo> {
    //return this.http.post<PaymentInfo>('/add', JSON.stringify(paymentInfo));
    return of(paymentInfo);
  }
}
