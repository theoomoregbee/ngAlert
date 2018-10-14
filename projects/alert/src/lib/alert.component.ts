import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IMessage, CloseType } from './interfaces';

@Component({
  selector: 'ng-alert',
  templateUrl: 'alert.component.html',
  styles: []
})
export class NgAlertComponent {

  @Input() dismissable: boolean;
  rawMessage: IMessage;
  @Output() messageChange = new EventEmitter();
  @Input() closeType: CloseType = CloseType.NORMAL;
  closeTypes = CloseType;

  @Input()
  get message(): IMessage {
    return this.rawMessage;
  }

  set message(value: IMessage) {
    this.rawMessage = value;
    this.messageChange.emit(this.rawMessage);
  }


}
