import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export enum MessageType {
  success = "success",
  error = "error",
  info = "info",
  warning = "warning"
}

export interface IMessage {
  type: MessageType,
  message: string,
  title?: string
}

export enum CloseType {
  TIMES, NORMAL
}

@Component({
  selector: 'ng-alert',
  templateUrl: './ng-alert.component.html'
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
