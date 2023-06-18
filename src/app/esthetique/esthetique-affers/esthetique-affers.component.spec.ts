import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsthetiqueAffersComponent } from './esthetique-affers.component';

describe('EsthetiqueAffersComponent', () => {
  let component: EsthetiqueAffersComponent;
  let fixture: ComponentFixture<EsthetiqueAffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsthetiqueAffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsthetiqueAffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
