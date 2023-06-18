import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GynecoComponent } from './gyneco.component';

describe('GynecoComponent', () => {
  let component: GynecoComponent;
  let fixture: ComponentFixture<GynecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GynecoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GynecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
