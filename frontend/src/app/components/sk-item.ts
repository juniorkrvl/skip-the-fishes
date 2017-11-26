import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-item',
  template: `
    <div class="card" style="width: 20rem;">
      <img class="card-img-left" src="{{image}}" alt="Card image cap" width="318" height="225">
      <div class="card-body">
        <h4 class="card-title">{{name}}</h4>
        <p class="card-text">{{description}}</p>
        <a *ngIf="!meal" [routerLink]="[ '/restaurant', id ]" class="btn btn-danger">See Menu</a>
        <div id="order-group" *ngIf="meal" class="row" style="width: 90%; padding: 10px;">
          <div class="col-md-4"><input id="qtd-input" class="form-control" type="text" value="0"></div>
          <div class="col-md-8"><a href="javascript:void(0)" class="btn btn-danger" style="right: 0;">Order</a></div>
        </div>

      </div>
    </div>
  `,
  styleUrls: ['styles.css']
})
export class ItemComponent {
  @Input() id: string
  @Input() image: string
  @Input() name: string
  @Input() description: string
  @Input() meal: false

}
