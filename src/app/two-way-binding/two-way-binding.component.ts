import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <input [(ngModel)]="name" type="text">
    <h3>{{name}}</h3>
  `,
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  private name = "";

  constructor() { }

  ngOnInit() {
  }

}
