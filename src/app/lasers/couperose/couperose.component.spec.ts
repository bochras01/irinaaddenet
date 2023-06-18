import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouperoseComponent } from './couperose.component';

describe('CouperoseComponent', () => {
  let component: CouperoseComponent;
  let fixture: ComponentFixture<CouperoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouperoseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouperoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
