import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycoseVaginaleComponent } from './mycose-vaginale.component';

describe('MycoseVaginaleComponent', () => {
  let component: MycoseVaginaleComponent;
  let fixture: ComponentFixture<MycoseVaginaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycoseVaginaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MycoseVaginaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
