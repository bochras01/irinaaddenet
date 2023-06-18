import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesotherapieComponent } from './mesotherapie.component';

describe('MesotherapieComponent', () => {
  let component: MesotherapieComponent;
  let fixture: ComponentFixture<MesotherapieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesotherapieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesotherapieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
