import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazerOffersComponent } from './lazer-offers.component';

describe('LazerOffersComponent', () => {
  let component: LazerOffersComponent;
  let fixture: ComponentFixture<LazerOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazerOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazerOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
