import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComblementRidesComponent } from './comblement-rides.component';

describe('ComblementRidesComponent', () => {
  let component: ComblementRidesComponent;
  let fixture: ComponentFixture<ComblementRidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComblementRidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComblementRidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
