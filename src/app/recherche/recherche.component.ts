import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      City_of_school: ['', Validators.required],
      Type_of_school: ['', Validators.required],
      Location_of_school: ['', Validators.required],
      Location_of_school1: ['', Validators.required],
      Location_of_school2: ['', Validators.required],
      Location_of_school3: ['', Validators.required],

    });

}
onSubmit() {
  // TODO: implement the logic to submit the form data
  console.log(this.registrationForm.value);
}
}
