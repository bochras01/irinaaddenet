import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitmentComponent } from './traitment.component';

describe('TraitmentComponent', () => {
  let component: TraitmentComponent;
  let fixture: ComponentFixture<TraitmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
