import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  toggleTheme() {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute('data-theme');

    if (currentTheme === 'dark') {
      htmlElement.setAttribute('data-theme', 'light');
    } else {
      htmlElement.setAttribute('data-theme', 'dark');
    }
  }

}
