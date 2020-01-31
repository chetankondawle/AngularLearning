import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClick($event)">Click Me!</button>
    <h3>{{greet}}</h3>
    <input #myInput type="text"><button (click)="logMethod(myInput)">Log</button>
  `,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  private greet = ""

  constructor() { }

  ngOnInit() {
  }

  onClick(event){
    this.greet = "Yay you clicked me!!";
    console.log(event);
    console.log(event.type);
  }

  logMethod(element){
    console.log(element.value);
  }

}
