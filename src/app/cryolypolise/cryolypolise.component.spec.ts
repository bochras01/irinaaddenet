import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryolypoliseComponent } from './cryolypolise.component';

describe('CryolypoliseComponent', () => {
  let component: CryolypoliseComponent;
  let fixture: ComponentFixture<CryolypoliseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryolypoliseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryolypoliseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
