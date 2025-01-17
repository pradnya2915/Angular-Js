import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {
  
  bank: String="sbi";
  accountNumber:number=12233;
  isIndian: boolean=true;
  stateName="Maharastra";
inputType="Checkbox";
myClassName : String="bg-success";

showAlter(){
  alert("welcome All");

}

changeBank(){
  this.bank="baroda";
}

}
