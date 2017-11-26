import { Component } from '@angular/core';

@Component({
  selector: 'sk-nav',
  template: `
  <header class="header clearfix">
    <nav>
      <ul class="nav nav-pills float-right">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a [routerLink]="['/']" class="nav-link" href="#">Search Restaurants</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://github.com/juniorkrvl/skip-the-fishes">About</a>
        </li>
      </ul>
    </nav>
    <h3 class="text-muted"><img src="./../../assets/img/skip_logo.png" alt=""></h3>
  </header>
  `,
  styleUrls: ['styles.css']
})
export class NavComponent {

}
