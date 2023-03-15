import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ 
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    NgbModule,
  ],
  exports: [ 
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    NgbModule,
  ],
  entryComponents:[
  ],
  providers:[
    // CookieService
  ],
})
export class SharedModule { }
