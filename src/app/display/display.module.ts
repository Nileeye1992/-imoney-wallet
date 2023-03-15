import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DisplayRoutingModule } from './display-routing.module';
import { FooterComponent } from './footer/footer.component';
import { MainDisplayComponent } from './main-display/main-display.component';
import { QrPopupComponent } from './qr-popup/qr-popup.component';



@NgModule({
  declarations: [
    MainDisplayComponent,
    FooterComponent,
    QrPopupComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DisplayRoutingModule
  ]
})
export class DisplayModule { }
