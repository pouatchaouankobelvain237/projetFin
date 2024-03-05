import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregistrementEcole1Component } from './enregistrement-ecole1.component';

describe('EnregistrementEcole1Component', () => {
  let component: EnregistrementEcole1Component;
  let fixture: ComponentFixture<EnregistrementEcole1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnregistrementEcole1Component]
    });
    fixture = TestBed.createComponent(EnregistrementEcole1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
