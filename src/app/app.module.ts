import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { MainDisplayComponent } from './display/main-display/main-display.component';
import { DisplayModule } from './display/display.module';

@NgModule({
  declarations: [
    AppComponent,
    MainDisplayComponent,
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    SharedModule,
    DisplayModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
