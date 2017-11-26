import { Component } from '@angular/core';

@Component({
  selector: 'sk-main-page',
  template: `
    <sk-nav></sk-nav>
    <sk-cover-main (onSearch)="onSearch($event)"></sk-cover-main>
    <sk-item *ngFor="let item of items"
      id = '{{item.id}}'
      name='{{item.name}}'
      image='{{item.image}}' description='{{item.description}}'>
    </sk-item>
    <div *ngIf="!hasItems()" style="text-align:center;">
    <br/><br/>
      <h4>Hey! Are you hungry? Search but skip the fishes =D</h4><br/>
    </div>
  `,
  styleUrls: ['styles.css']
})
export class MainPageComponent {
  items = []

  hasItems() {
    return this.items.length > 0
  }

  onSearch(items) {
    this.items = items
  }

}
