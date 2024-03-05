import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEcoleComponent } from './single-ecole.component';

describe('SingleEcoleComponent', () => {
  let component: SingleEcoleComponent;
  let fixture: ComponentFixture<SingleEcoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleEcoleComponent]
    });
    fixture = TestBed.createComponent(SingleEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
