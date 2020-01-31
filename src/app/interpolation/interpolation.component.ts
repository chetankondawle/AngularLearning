import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `
    <div>{{greetMe()}}</div>
    <div>{{siteUrl}}</div>
  `,
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  private name = "Chetan";
  private siteUrl = window.location.href;

  constructor() { }

  ngOnInit() {
  }

  greetMe(){
    return "Hello " + this.name;
  }

}
