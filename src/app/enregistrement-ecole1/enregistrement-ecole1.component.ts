import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enregistrement-ecole1',
  templateUrl: './enregistrement-ecole1.component.html',
  styleUrls: ['./enregistrement-ecole1.component.scss']
})
export class EnregistrementEcole1Component {
  registrationForm: FormGroup;
  constructor(private formBuilder: FormBuilder,){
    this.registrationForm = this.formBuilder.group({
      Effectif:['',Validators.required],
      Pension:['',Validators.required]
    });
  }

  classeSelectionnee: string | undefined;
  classeDisponibles: string[] = ['6ème' , '5ème', '4ème', '3ème']; // Exemple d'options disponibles
  onSelectAnnee(classe: string, ): void {
    this.classeSelectionnee = classe;
  }

}
