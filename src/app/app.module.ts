import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { EntityDataModule, EntityDataService, EntityDefinitionService } from '@ngrx/data';
import { PaymentInfoDataService } from './services/payment-info-data.service';
import { paymentInfoMetaData } from './store/payment-info.metadata';
import { EffectsModule } from '@ngrx/effects';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng-lts/calendar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { ScrollPanelModule } from 'primeng-lts/scrollpanel';
import { InputNumberModule } from 'primeng-lts/inputnumber';
import { PaymentInfoListComponent } from './components/payment-info-list/payment-info-list.component';
import { PaymentInfoComponent } from './components/payment-info-list/payment-info/payment-info.component';
import { AddPaymentInfoComponent } from './components/add-payment-info/add-payment-info.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng-lts/api';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    PaymentInfoListComponent,
    PaymentInfoComponent,
    AddPaymentInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false }),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({}),
    ButtonModule,
    RippleModule,
    InputTextModule,
    ProgressSpinnerModule,
    ToastModule,
    CalendarModule,
    ScrollPanelModule,
    InputNumberModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
  // --------------------------------------------------------------------------
  constructor(
    private entityDefService: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private paymentInfoDataService: PaymentInfoDataService
  ) {
    entityDefService.registerMetadataMap(paymentInfoMetaData);
    entityDataService.registerService('PaymentInfos', paymentInfoDataService);
  }
}
