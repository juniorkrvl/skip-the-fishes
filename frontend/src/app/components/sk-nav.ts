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
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
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
