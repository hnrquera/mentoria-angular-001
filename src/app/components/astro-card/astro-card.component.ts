import { Component, Input, input, output } from '@angular/core';

@Component({
  selector: 'app-astro-card',
  imports: [],
  templateUrl: './astro-card.component.html',
  styleUrl: './astro-card.component.scss'
})
export class AstroCardComponent {

  star = input<any>();

}
