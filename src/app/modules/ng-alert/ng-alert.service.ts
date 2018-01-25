import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { IMessage } from './ng-alert.component';

/**
 * this is used to handle our overall application alert --> App Level Alert
 */
@Injectable()
export class NgAlertService {
  private _messageSource = new Subject<IMessage>();
  constructor() { }

  /**
   * this returns our alert message source
   */
  getSource() {
    return this._messageSource;
  }

  /**
   * push our message to our alert
   * @param message 
   */
  push(message: IMessage) {
    this._messageSource.next(message);
  }
}
