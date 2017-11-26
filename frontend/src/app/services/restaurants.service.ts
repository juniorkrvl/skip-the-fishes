import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';

@Injectable()
export class RestaurantService {

    constructor(private http: Http) { }

    // restaurants
    getRestaurants() {
      return this.http.get(
        environment.backendUrl + environment.restaurants)
        .map((response) => response.json())
    }

    getRestaurant(res_id: Number) {
      return this.http.get(
        environment.backendUrl + environment.restaurant(res_id))
        .map((response) => {
          return response.json()
        })
    }

    getMeals(res_id: Number) {
      return this.http.get(
        environment.backendUrl + environment.meals(res_id))
        .map((response) => response.json())
    }
}
