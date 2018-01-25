import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgAlertComponent } from './ng-alert.component';
import { NgAlertService } from './ng-alert.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgAlertComponent],
  exports: [
    NgAlertComponent
  ],
  providers: [
    NgAlertService
  ]
})
export class NgAlertModule { }
