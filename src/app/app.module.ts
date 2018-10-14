import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgAlertModule} from 'ng-alert';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
