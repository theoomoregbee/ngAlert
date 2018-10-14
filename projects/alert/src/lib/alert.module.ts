import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { NgAlertComponent } from './alert.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgAlertComponent],
  exports: [NgAlertComponent]
})
export class NgAlertModule { }
