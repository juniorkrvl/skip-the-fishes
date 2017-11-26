import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Subject } from 'rxjs/Subject';
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
}
