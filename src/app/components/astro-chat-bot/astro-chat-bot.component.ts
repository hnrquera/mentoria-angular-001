import { Component, inject, OnInit } from '@angular/core';
import { GeminiService } from '../../services/gemini.service';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-astro-chat-bot',
  imports: [FormsModule],
  templateUrl: './astro-chat-bot.component.html',
  styleUrl: './astro-chat-bot.component.scss'
})
export class AstroChatBotComponent implements OnInit {

  prompt: string = '';
  chatHistory: any[] = [];

  geminiService = inject(GeminiService);

  ngOnInit(): void {
    this.geminiService.getMessageHistory().subscribe((res) => {
      if(res) {
        this.chatHistory.push(res);
      }
    })
  }

  async sendData() {
    if(this.prompt) {
      const data = this.prompt;
      this.prompt = '';
      await this.geminiService.generateText(data);
    }
  }

}
