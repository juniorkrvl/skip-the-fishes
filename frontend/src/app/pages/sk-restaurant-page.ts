import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'sk-restaurant-page',
  template: `
    <sk-nav></sk-nav>
    <sk-cover-restaurant
      name="{{restaurant.name}}"
      cover="{{restaurant.featured_image}}"
      description="{{restaurant.cuisines}}"
      thumb="{{restaurant.thumb}}"></sk-cover-restaurant>
    <sk-item *ngFor="let item of meals"
      name='{{item.name}}'
      image='{{item.image}}' description='{{item.description}}' [meal]="true">
    </sk-item>
  `,
  styleUrls: ['styles.css']
})
export class RestaurantPageComponent implements OnInit {
  meals = []
  restaurant

  constructor(
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.meals = this.route.snapshot.data['meals']
      this.restaurant = this.route.snapshot.data['restaurant']
    })
  }

  onSearch(items) {
    this.meals = items
  }

}
