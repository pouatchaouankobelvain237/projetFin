import { Component } from '@angular/core';


@Component({
  selector: 'app-formulaire-commentaire',
  templateUrl: './formulaire-commentaire.component.html',
  styleUrls: ['./formulaire-commentaire.component.scss']
})
export class FormulaireCommentaireComponent {
  constructor(){}
  commentContent: string = '';
  starSelected: number = 0;

  toggleStar(starNumber: number) {
    if (this.starSelected === starNumber) {
      this.starSelected = 0; // Réinitialiser la sélection si on clique sur l'étoile actuellement sélectionnée
    } else {
      this.starSelected = starNumber; // Sélectionner l'étoile correspondante
    }

  }


}
