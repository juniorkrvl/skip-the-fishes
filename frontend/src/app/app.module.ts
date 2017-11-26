import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './components/sk-nav';
import { CoverMainComponent } from './components/sk-cover-main';
import { ItemComponent } from './components/sk-item';
import { MainPageComponent } from './pages/sk-main-page';
import { DetailPageComponent } from './pages/sk-detail-page';
import { CoverRestaurantComponent } from './components/sk-cover-restaurant';
import { appRouter } from './app.routing';
import { RestaurantService } from 'app/services/restaurants.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    HttpModule,
    RouterModule.forRoot(appRouter),
    BrowserModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    CoverMainComponent,
    CoverRestaurantComponent,
    ItemComponent,
    MainPageComponent,
    DetailPageComponent
  ],
  providers: [
    RestaurantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
