import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AstroCardComponent } from './components/astro-card/astro-card.component';
import { AstroChatBotComponent } from './components/astro-chat-bot/astro-chat-bot.component';
import { AstroService } from './services/astro.service';
import { Observable } from 'rxjs';
import { AsyncPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, AstroCardComponent, AstroChatBotComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  stars$?: Observable<any>;

  private astroService = inject(AstroService);

  ngOnInit(): void {
    this.stars$ = this.astroService.getStars();
  }

}
