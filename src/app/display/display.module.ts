import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DisplayRoutingModule } from './display-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    DisplayRoutingModule
  ]
})
export class DisplayModule { }
