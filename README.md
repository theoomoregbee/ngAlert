# NgAlert

This is a simple alert component, to help show different level of alerts and easy configurations on how you want it to act. Oh yea! easy to style to follow your own feel.

## Installation
```sh
npm install --save ngAlert
```
Then open open up your `styles.css` and add this line (for easy customization, don't forget to send a PR for nice UIs, so other peeps can use it :winks:)
```
@import "./node_modules/ng-alert/style.css";
```

## Usage
```
<ng-alert [(message)]="message" [dismissable]="true"  [closeType]="closeTypes.TIMES"></ng-alert>
```
* **message**: is a two bounded attribute which takes in `IMessage`
  ```typescript
        export interface IMessage {
        type: MessageType,
        message: string,
        title?: string
        } 
  ```
  `type` can be `MessageType.info`, `MessageType.success`, `MessageType.error` or `MessageType.warning`
* **dismissable**: is an optional field to allow users to close the alert or not.   `boolean`. Defaults to 
* **closeType**: is used to determine which type of close button should be place on it, and only accepts `CloseType` enum. Defaults to `CloseType.NORMAL`
```typescript
    export enum CloseType {
    TIMES, NORMAL
    }
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

## Example 
Check [Example](/example) directory

## Contribution
Check [CONTRIBUTING.md](CONTRIBUTING.md)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
