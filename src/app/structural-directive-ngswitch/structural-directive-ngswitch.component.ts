import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ngswitch',
  template: `
    <h3>Structural Directive 'ngSwitch' '[ngSwitch]="color"'</h3>
    <button #ref1 value="red" (click)="changeColor(ref1)">RED</button>
    <button #ref2 value="green" (click)="changeColor(ref2)">GREEN</button>
    <button #ref3 value="blue" (click)="changeColor(ref3)">BLUE</button>
    <button #ref4 value="default" (click)="changeColor(ref4)">DEFAULT</button>
    <div [ngSwitch]="color">
      <h3 *ngSwitchDefault>DEFAULT Case!!</h3>
      <h3 *ngSwitchCase="'red'" [style.color]="'red'">RED!!</h3>
      <h3 *ngSwitchCase="'green'" [style.color]="'green'">GREEN!!</h3>
      <h3 *ngSwitchCase="'blue'" [style.color]="'blue'">BLUE!!</h3>
    </div>
  `,
  styleUrls: ['./structural-directive-ngswitch.component.css']
})
export class StructuralDirectiveNgswitchComponent implements OnInit {


  private color = "red";

  constructor() { }

  ngOnInit() {
  }

  changeColor(element){
    this.color = element.value
  }

}
