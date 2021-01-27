import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PaymentInfo } from 'src/app/models/payment-info.model';
import { PaymentInfoDataService } from 'src/app/services/payment-info-data.service';
import { PaymentInfoEntityService } from 'src/app/store/payment-info-entity.service';

@Component({
  selector: 'app-payment-info-list',
  templateUrl: './payment-info-list.component.html',
  styleUrls: ['./payment-info-list.component.scss']
})
export class PaymentInfoListComponent implements OnInit {
  // --------------------------------------------------------------------------
  allInfoList$: Observable<Array<PaymentInfo>>;

  // --------------------------------------------------------------------------
  constructor(private paymentInfoEntityService: PaymentInfoEntityService, private router: Router) {
    this.allInfoList$ = this.paymentInfoEntityService.entities$;
  }

  // --------------------------------------------------------------------------
  ngOnInit(): void {
    this.paymentInfoEntityService.getAll();
  }
  // --------------------------------------------------------------------------
  addInfoClicked(): void {
    this.router.navigateByUrl('add');
  }
}
