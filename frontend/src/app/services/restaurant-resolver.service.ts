import {ActivatedRouteSnapshot, Params,  ActivatedRoute,   Resolve} from '@angular/router';
import { Injectable } from '@angular/core';
import { RestaurantService } from 'app/services/restaurants.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestaurantResolver implements Resolve<any> {

  constructor(
    private restaurantService: RestaurantService,
    private activatedRoute: ActivatedRoute) { }

  resolve(route: ActivatedRouteSnapshot) {
    const restaurantId = Number(route.paramMap.get('id'))
    return this.restaurantService.getRestaurant(restaurantId).map(res => {
      console.log(res)
      return res
    }).catch((err) => {
      return Observable.throw(err.json())
    })
  }

}
