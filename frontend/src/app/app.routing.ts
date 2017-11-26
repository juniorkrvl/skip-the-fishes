import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/sk-main-page';
import { RestaurantResolver } from './services/restaurant-resolver.service';
import { MealsResolver } from 'app/services/meals-resolver.service';
import { RestaurantPageComponent } from './pages/sk-restaurant-page';

export const appRouter: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'restaurant/:id', component: RestaurantPageComponent,
    resolve: {
      meals: MealsResolver,
      restaurant: RestaurantResolver
    }
  },
]
