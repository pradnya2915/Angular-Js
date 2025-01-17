import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  student: any = {
    f_name: "",
    m_name: "",
    l_name: "",
    city: "",
    pincode: "",
    mobile_number: ""

  }
  formValue: any;

  onSubmit() {

    this.formValue = this.student;
  }
}
