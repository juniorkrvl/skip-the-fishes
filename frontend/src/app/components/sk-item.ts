import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-item',
  template: `
    <div class="card" style="width: 20rem;">
      <img class="card-img-left" src="{{image}}" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">{{name}}</h4>
        <p class="card-text">{{description}}</p>
        <a href="#" class="btn btn-danger">See Menu</a>
      </div>
    </div>
  `,
  styleUrls: ['styles.css']
})
export class ItemComponent {
  @Input() image: string
  @Input() name: string
  @Input() description: string

}
