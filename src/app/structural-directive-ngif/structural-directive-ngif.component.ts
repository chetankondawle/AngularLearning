import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ngif',
  template: `
    <h3 *ngIf='display'>Structural Directive 'ngIf' '*ngIf="true"'</h3>
    <button (click)="displayHeading()">Click Me! To change</button>
    <h3 #heading *ngIf='notDisplay'>Structural Directive 'ngIf' '*ngIf="true"'</h3>
    <h3 #heading *ngIf='!notDisplay'>Structural Directive 'ngIf' '*ngIf="false"'</h3>
  `,
  styleUrls: ['./structural-directive-ngif.component.css']
})

export class StructuralDirectiveNgifComponent implements OnInit {

  private display = true
  private notDisplay = true;

  constructor() { }

  displayHeading(){
    if(this.notDisplay) {
      this.notDisplay = false
    }else{
      this.notDisplay = true
    }
  }

  ngOnInit() {
  }

}
