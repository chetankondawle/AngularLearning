import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <input id="{{myId}}" value="PB -> Interpolation" style="width:350px"><br>
    <input [id]="myId" value="PB -> Simple Property Binding" style="width:350px"><br>
    <input bind-id="myId" value="PB -> bind-id directve" style="width:350px"><br>
    <input disabled="false" bind-id="myId" value="PB -> Conditional Property Binding fail case" style="width:350px"><br>
    <input [disabled]="isDisabled" bind-id="myId" value="PB -> Conditional Property Binding" style="width:350px"><br>
  `,
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  private myId = "testId";
  private isDisabled = false;

  constructor() { }

  ngOnInit() {
  }

}
