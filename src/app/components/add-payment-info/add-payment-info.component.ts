import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentInfo } from 'src/app/models/payment-info.model';
import { PaymentInfoEntityService } from 'src/app/store/payment-info-entity.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MessageService } from 'primeng-lts/api';
import { v4 as genId } from 'uuid';

@Component({
  selector: 'app-payment-info-form',
  templateUrl: './add-payment-info.component.html',
  styleUrls: ['./add-payment-info.component.scss']
})
export class AddPaymentInfoComponent implements OnInit {
  // --------------------------------------------------------------------------
  paymentInfoFG: FormGroup;
  minDate: Date;

  // --------------------------------------------------------------------------
  constructor(
    private router: Router,
    private pInfoEntityService: PaymentInfoEntityService,
    private messageService: MessageService
  ) {}

  // --------------------------------------------------------------------------
  ngOnInit(): void {
    this.minDate = new Date();
    this.paymentInfoFG = new FormGroup({
      cardNumber: new FormControl(null, [
        Validators.required,
        Validators.min(1000000000000000),
        Validators.max(999999999999999999999)
      ]),
      cardHolderName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      expiryDate: new FormControl(null, [Validators.required]),
      securityCode: new FormControl(null, [Validators.max(999), Validators.min(100)]),
      amount: new FormControl(null, [Validators.required, Validators.min(1)])
    });
  }

  // --------------------------------------------------------------------------
  submitPaymentInfo(): void {
    console.log(this.paymentInfoFG);
    const frmValues = this.paymentInfoFG.value;
    const newPaymentInfo: PaymentInfo = {
      _id: genId(),
      cardHolderName: frmValues.cardHolderName ?? '',
      cardNumber: (frmValues.cardNumber ?? '').toString(),
      amount: (frmValues.amount ?? '').toString(),
      securityCode: (frmValues.securityCode ?? '').toString(),
      expiryDate: new Date((frmValues.expiryDate ?? new Date()).toDateString())
    };

    this.pInfoEntityService
      .add(newPaymentInfo)
      .pipe(
        tap((pInfo) => {
          this.messageService.clear();
          if (pInfo) {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'New Payment Info added.',
              life: 1500
            });
            this.router.navigateByUrl('');
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Failed',
              detail: 'Could not add New Payment Info.',
              life: 1500
            });
          }
        })
      )
      .subscribe();
  }

  // --------------------------------------------------------------------------
  resetValues(): void {
    this.paymentInfoFG.reset();
  }
}
