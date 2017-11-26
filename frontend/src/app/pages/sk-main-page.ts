import { Component } from '@angular/core';

@Component({
  selector: 'sk-main-page',
  template: `
    <sk-nav></sk-nav>
    <sk-cover-main (onSearch)="onSearch($event)"></sk-cover-main>
    <sk-item *ngFor="let item of items"
      name='{{item.name}}'
      image='{{item.image}}' description='{{item.description}}'>
    </sk-item>
  `,
  styleUrls: ['styles.css']
})
export class MainPageComponent {
  items = []

  onSearch(items) {
    console.log(items)
    this.items = items
  }

}
