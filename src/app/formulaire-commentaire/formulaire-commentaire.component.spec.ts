import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireCommentaireComponent } from './formulaire-commentaire.component';

describe('FormulaireCommentaireComponent', () => {
  let component: FormulaireCommentaireComponent;
  let fixture: ComponentFixture<FormulaireCommentaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaireCommentaireComponent]
    });
    fixture = TestBed.createComponent(FormulaireCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
