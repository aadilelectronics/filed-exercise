import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, EntityActionOptions, HttpUrlGenerator } from '@ngrx/data';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PaymentInfo } from '../models/payment-info.model';
import { PaymentsService } from './payments.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentInfoDataService extends DefaultDataService<PaymentInfo> {
  // --------------------------------------------------------------------------
  constructor(
    http: HttpClient,
    httpUrlGen: HttpUrlGenerator,
    private paymentService: PaymentsService
  ) {
    super('PaymentsInfo', http, httpUrlGen);
  }

  // --------------------------------------------------------------------------
  add(pInfo: PaymentInfo, options?: EntityActionOptions): Observable<PaymentInfo> {
    return this.paymentService.addPayment(pInfo);
  }

  // --------------------------------------------------------------------------
  getAll(): Observable<PaymentInfo[]> {
    return of(new Array<PaymentInfo>());
  }
}
