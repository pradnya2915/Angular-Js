import { state } from '@angular/animations';
import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  studentform: FormGroup = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(4)]),
    lastName: new FormControl(),
    userName: new FormControl("some@123", [Validators.email]),
    city: new FormControl(),
    state: new FormControl(),
    zipcode: new FormControl()
  });


  formValue: any;
  onSave() {
    this.formValue = this.studentform.value;
  }
}
