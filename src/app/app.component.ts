import { Component } from '@angular/core';
import { IMessage, MessageType, CloseType } from './modules/ng-alert/ng-alert.component';
import { OnInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { NgAlertService } from './modules/ng-alert/ng-alert.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  message: IMessage;
  message2: IMessage;
  closeTypes = CloseType;
  messageTypes = MessageType;
  _alertSub: Subscription;

  constructor(private _ngAlert: NgAlertService) {
    this.message = {
      message: 'Sample message alert',
      type: MessageType.info
    };
    this.message2 = {
      message: 'Sample message alert with title',
      title: 'This is Title',
      type: MessageType.info
    };
  }

  /**
   * on Init, auto subscribed to any new message alert
   */
  ngOnInit() {
    this._alertSub = this._ngAlert.getSource().subscribe(message => {
      this.message = message;
    });
  }

  /**
   * unsubscribe from the alert subscription
   */
  ngOnDestroy() {
    this._alertSub.unsubscribe();
  }

  /**
   * show message with type, default to info for message type
   * @param message
   * @param type
   */
  showMessage(message: string, type: MessageType = MessageType.info) {
    this._ngAlert.push({
      message: message,
      type: type
    });
  }

  showConfirmation(message: string, type: MessageType = MessageType.warning) {
 this._ngAlert.push({
      message: message,
      type: type,
   buttons: [
     {
       label: 'Cancel'
     },
     {
       label: 'Continue',
       css: 'continue',
       action: () => {
        console.log('someting about me');
       }
     }
   ]
    });
  }
}
