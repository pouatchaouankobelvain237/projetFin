import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  constructor() { }

  // Gérez la soumission du formulaire
  onSubmit() {
    console.log(this.loginForm.value); // Affiche les données saisies par l'utilisateur
    // Ici, vous pouvez envoyer les données à votre service de connexion
  }

}












