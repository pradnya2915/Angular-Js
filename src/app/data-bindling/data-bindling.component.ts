import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-bindling',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-bindling.component.html',
  styleUrl: './data-bindling.component.css'
})
export class DataBindlingComponent {

  courseName:String ="java";
  inputType="Checkbox";
  rollNumber=123;
  myClassName:string="bg-primary";
  isIndian:boolean=true;
  stateName: String="Maharastra";

  firstName =signal("pradnya bhor");

  constructor(){

  }
changeCourseName(){
  this.courseName="angular";
  this.firstName.set("pratik");
}

  showAlert(message:String){
alert(message);
  }
}
