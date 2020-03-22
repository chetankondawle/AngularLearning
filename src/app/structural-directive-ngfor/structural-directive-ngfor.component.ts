import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ngfor',
  template: `
    <h3>Structural Directive ngFor '*ngFor="let color of colors"'</h3>
    <table border = "1 solid white">
      <tr>
        <th>Index</th>
        <th>First</th>
        <th>Last</th>
        <th>Color</th>
      </tr>
      <div *ngFor="let color of colors; index as i; first as f; last as l">
        <tr>
          <td><h3>{{ i }}</h3></td>
          <td><h3>{{ f }}</h3></td>
          <td><h3>{{ l }}</h3></td>
          <td><h3 [style.color]=color>{{ color | uppercase }}</h3></td>
        </tr>
      </div>
    </table>
  `,
  styleUrls: ['./structural-directive-ngfor.component.css']
})
export class StructuralDirectiveNgforComponent implements OnInit {

  private colors = ['red','green','blue','yellow']

  constructor() { }

  ngOnInit() {
  }



}
