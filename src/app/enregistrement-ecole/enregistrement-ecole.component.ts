import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-enregistrement-ecole',
  templateUrl: './enregistrement-ecole.component.html',
  styleUrls: ['./enregistrement-ecole.component.scss']
})
export class EnregistrementEcoleComponent {

  registrationForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router){
    this.registrationForm = this.formBuilder.group({
      NomDeEtablissement:['',Validators.required],
      TypeDeEtablissement:['',Validators.required],
      AnneeScolaire:['',Validators.required],
      VilleDeEtablissement:['',Validators.required],
      QuartierDeEtablissement:['',Validators.required],
      DescriptionDeLaLocalisation:['',Validators.required]
    });
  }
  onContinue(): void{
    this.router.navigateByUrl('enregistrement ecole suite');

  }
}
