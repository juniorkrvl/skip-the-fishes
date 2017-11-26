import {Routes} from '@angular/router';
import {MainPageComponent} from './pages/sk-main-page';
import { DetailPageComponent } from './pages/sk-detail-page';

export const appRouter: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'restaurant/:id', component: DetailPageComponent },
]
