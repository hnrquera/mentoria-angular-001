import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroChatBotComponent } from './astro-chat-bot.component';

describe('AstroChatBotComponent', () => {
  let component: AstroChatBotComponent;
  let fixture: ComponentFixture<AstroChatBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstroChatBotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstroChatBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
