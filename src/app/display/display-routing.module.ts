import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainDisplayComponent } from './main-display/main-display.component';

const routes: Routes = [
  // {
  //   path: "",
  //   redirectTo: "login",
  //   pathMatch: "full",
  // },
  { path: 'display/main', component: MainDisplayComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayRoutingModule { }
