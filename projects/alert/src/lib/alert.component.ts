import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-alert',
  template: `
    <p>
      alert works!
    </p>
  `,
  styles: []
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
