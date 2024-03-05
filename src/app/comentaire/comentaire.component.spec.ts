import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentaireComponent } from './comentaire.component';

describe('ComentaireComponent', () => {
  let component: ComentaireComponent;
  let fixture: ComponentFixture<ComentaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComentaireComponent]
    });
    fixture = TestBed.createComponent(ComentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
