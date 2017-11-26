import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'sk-cover-restaurant',
  template: `
  <div class="jumbotron"
    [ngStyle]="{'background-image': 'url(' + cover + ')'}">
    <h1 class="display-3">{{name}}</h1>
    <p class="lead">{{description}}</p>
  </div>
  `,
  styleUrls: ['styles.css']
})
export class CoverRestaurantComponent {

  @Input() name: string
  @Input() description: string
  @Input() cover: string


}
