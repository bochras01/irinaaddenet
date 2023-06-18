import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouMainComponent } from './cou-main.component';

describe('CouMainComponent', () => {
  let component: CouMainComponent;
  let fixture: ComponentFixture<CouMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
