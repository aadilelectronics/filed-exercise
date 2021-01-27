// ----------------------------------------------------------------------------
// -- DTO for credit card payment info ----------------------------------------
// ----------------------------------------------------------------------------
export interface PaymentInfo {
  _id: string;
  cardNumber: string;
  cardHolderName: string;
  expiryDate: Date;
  securityCode?: string;
  amount: number;
}

// ----------------------------------------------------------------------------
export function paymentInfoComparator(paymentInfo1: PaymentInfo, paymentInfo2: PaymentInfo) {
  return paymentInfo1._id.localeCompare(paymentInfo2._id);
}
