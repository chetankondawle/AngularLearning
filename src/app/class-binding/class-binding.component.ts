import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
    <div class="text-success">Simple class</div>
    <div [class]="successText" class="text-special">Error class binding</div>
    <div [class]="successText">class Binding</div>
    <div [class.text-fail]="hasError">conditional class binding</div>
    <h3 [ngClass]="messageClasses">ngClass binding</h3>
  `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-fail {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class ClassBindingComponent implements OnInit {

  private successText = "text-success";
  private hasError = false;
  private isSpecial = true;
  private messageClasses = {
    "text-success": !this.hasError,
    "text-fail": this.hasError,
    "text-special": this.isSpecial
  }

  constructor() { }

  ngOnInit() {
  }

}
