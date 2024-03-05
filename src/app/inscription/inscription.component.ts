import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      city: ['', Validators.required]
    });
  }

  onSubmit() {
    // TODO: implement the logic to submit the form data
    console.log(this.registrationForm.value);
  }

  onCancel() {
    // TODO: implement the logic to cancel the registration
    this.registrationForm.reset();
  }
}
