import { RestaurantService } from '../services/restaurants.service';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sk-cover-main',
  template: `
  <div class="jumbotron">
    <h1 class="display-3">Deliver Food</h1>
    <p class="lead">Delivery for any hunger: order and receive at home.</p>
    <p>
      <input #searchBox id="search" class="form-control-lg" type="text"
        (keyup.enter)="search(searchBox.value)" placeholder="Type some place">
      <a class="btn btn-lg btn-danger" href="#" role="button" (click)="search(searchBox.value)">Search</a>
    </p>
  </div>
  `,
  styleUrls: ['styles.css']
})
export class CoverMainComponent {
  @Output() onSearch = new EventEmitter()
  value: string

  constructor(private restaurantService: RestaurantService) {}

  search(value) {
    this.restaurantService.getRestaurants()
    .subscribe((result) => {
      if (result) {
        const items = result.restaurants.map(item => {
          return {
            id: item.restaurant.id,
            name: item.restaurant.name,
            description: item.restaurant.cuisines,
            image:
              item.restaurant.thumb === '' ?
              'http://lorempixel.com/400/200/food/' + Math.floor((Math.random() * 10) + 1)
              : item.restaurant.thumb
          }
        })
        this.onSearch.emit(items)
      }
    })
  }

}
