import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregistrementEcoleComponent } from './enregistrement-ecole.component';

describe('EnregistrementEcoleComponent', () => {
  let component: EnregistrementEcoleComponent;
  let fixture: ComponentFixture<EnregistrementEcoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnregistrementEcoleComponent]
    });
    fixture = TestBed.createComponent(EnregistrementEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
