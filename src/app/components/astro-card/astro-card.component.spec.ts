import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroCardComponent } from './astro-card.component';

describe('AstroCardComponent', () => {
  let component: AstroCardComponent;
  let fixture: ComponentFixture<AstroCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstroCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
