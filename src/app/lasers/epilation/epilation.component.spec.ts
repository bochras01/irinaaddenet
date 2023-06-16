import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpilationComponent } from './epilation.component';

describe('EpilationComponent', () => {
  let component: EpilationComponent;
  let fixture: ComponentFixture<EpilationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpilationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpilationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
