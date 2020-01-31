import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
    <h3 [style.color]="'orange'">Style Binding</h3>
    <h3 [style.color]="hasError ? 'orange' : 'pink'">conditional Style Binding</h3>
    <h3 [style.color]="highlightColor">propert Style Binding</h3>
    <h3 [ngStyle]="titleStyles">ngStyle Binding</h3>
  `,
  styles: []
})
export class StyleBindingComponent implements OnInit {

  private hasError = true;
  private highlightColor = "maroon";

  private titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }
  constructor() { }

  ngOnInit() {
  }

}
