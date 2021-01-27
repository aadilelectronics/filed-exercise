import { EntityMetadataMap } from '@ngrx/data';
import { PaymentInfo, paymentInfoComparator } from 'src/app/models/payment-info.model';

// ?--------------------------------------------------------------------------------------
export const paymentInfoMetaData: EntityMetadataMap = {
  // ?------------------------------------------------------------------------------------
  PaymentInfos: {
    sortComparer: paymentInfoComparator,
    selectId: (paymentInfo: PaymentInfo) => paymentInfo._id
  }
};
