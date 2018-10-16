# NgAlert
[![Travis](https://img.shields.io/travis/theo4u/ngAlert.svg)](https://travis-ci.org/theo4u/ngAlert)
[![npm](https://img.shields.io/npm/v/@theo4u/ng-alert.svg)](https://www.npmjs.com/package/@theo4u/ng-alert)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

This is a simple alert component, to help show different level of alerts and easy configurations on how you want it to act. Also, supports confirmation alert. Oh yea! easy to style to follow your own feel.

![Error Message](/img/error.png)
![Info Message](/img/info.png)
![Warning Message](/img/warning.png)
![Success  Message](/img/success.png)
![Confirm  Message](/img/confirm.png)

## Installation
```sh
npm install --save @theo4u/ng-alert
```

For Angular 5 and below use 

```sh
npm install --save @theo4u/ng-alert@1.6.0
```

Then open open up your `styles.css` and add this line (for easy customization, don't forget to send a PR for nice UIs, so other peeps can use it :winks:)
```
@import "../node_modules/@theo4u/ng-alert/style.css";
```

Update your `app.module.ts` **imports** array  
```typescript
import { NgAlertModule } from '@theo4u/ng-alert';
...
imports: [
    BrowserModule,
    NgAlertModule,
    ....
  ]
```

## Demo
[HERE](https://theo4u.github.io/ngAlert)

## Usage
```
<ng-alert [(message)]="message" [dismissable]="true"></ng-alert>
```
* **message**: is a two bounded attribute which takes in `IMessage`
  ```typescript
        export interface IMessage {
        type: MessageType,
        message: string,
        title?: string,
        buttons?: Array<{
          label: string,
          action?: Function,
          css?: string
        }>
        } 
  ```
  `type` can be `MessageType.info`, `MessageType.success`, `MessageType.error` or `MessageType.warning`
* **dismissable**: is an optional field to allow users to close the alert or not.   `boolean`. Defaults to 
* **closeType**: is used to determine which type of close button should be place on it, and only accepts `CloseType` enum. Defaults to `CloseType.TIMES`
```typescript
    export enum CloseType {
    TIMES, NORMAL
    }

// usage
// NORMAL -> the close button is beneath the alert message
// TIMES -> the close button is by the far right with x
<ng-alert [(message)]="message" [dismissable]="true" [closeType]="closeTypes.NORMAL"></ng-alert>
```


## App Level Alert 
You can decide to make use of the `NgAlertService` to push new messages, useful if you want to maintain a central point of alerting your users of anything, like at the top of your page.
```typescript
  ngOnInit() { // this should be place in the location where you the ngAlert component markup is called
    this._alertSub = this._ngAlert.getSource().subscribe(message => {
      this.message = message;
    })
  }
```
From any location withing your app, just push the new messages with `NgAlertService.push(IMessage);` after adding it to your constructor.

**NB**: any of the following above can be imported like below
```typescript
import { NgAlertService, IMessage, MessageType, CloseType  } from '@theo4u/ng-alert';
```

## Confirmation Alert
It can also serve as a confirmation alert, if `buttons` properties of `IMessage` is passed in, which is an array
* **label**: the text to show for your button
* **action**: the action to perform when the button is clicked 
* **css**: your custom css to pass in, since its just a plain `<button></button>`


## Example Usage
Check [app.component.ts](./src/app/app.component.ts)

## Contribution
Check [CONTRIBUTING.md](CONTRIBUTING.md). `npm start` instead of `ng serve` so you easily watch for scss changes while playing with the scss files.
Makes use of 
* [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages) for pushing to gh-page 👍, check `deploy script` [package.json](package.json)


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
