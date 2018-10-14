import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMessage } from './interfaces';

@Injectable({
  providedIn: 'root'
})
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
   * @param message type IMessage to be pushed to our listeners/subscribers
   */
  push(message: IMessage) {
    this._messageSource.next(message);
  }
}
