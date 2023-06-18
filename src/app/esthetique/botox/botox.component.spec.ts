import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoxComponent } from './botox.component';

describe('BotoxComponent', () => {
  let component: BotoxComponent;
  let fixture: ComponentFixture<BotoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
