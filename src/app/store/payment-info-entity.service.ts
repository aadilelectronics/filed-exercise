import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { PaymentInfo } from 'src/app/models/payment-info.model';

// ?--------------------------------------------------------------------------------------
@Injectable({
  providedIn: 'root'
})
export class PaymentInfoEntityService extends EntityCollectionServiceBase<PaymentInfo> {
  // ?------------------------------------------------------------------------------------
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('PaymentInfos', serviceElementsFactory);
  }
}
