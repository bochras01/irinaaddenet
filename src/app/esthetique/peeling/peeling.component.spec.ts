import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeelingComponent } from './peeling.component';

describe('PeelingComponent', () => {
  let component: PeelingComponent;
  let fixture: ComponentFixture<PeelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeelingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
