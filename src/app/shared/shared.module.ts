import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ 
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
  ],
  exports: [ 
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserModule,
  ],
  entryComponents:[
  ],
  providers:[
    // CookieService
  ],
})
export class SharedModule { }
