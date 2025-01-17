import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
// import { BindingComponent } from '../binding/binding.component';


@Component({
  selector: 'app-institute',  // Correct selector
  templateUrl: './institute.component.html',  // Move HTML content to the external file
  styleUrls: ['./institute.component.css'],
  standalone: true,
  imports: [FormsModule, RouterModule],
})
export class InstituteComponent {

name:String="pradnya";
inputType="radio"
isIndian:boolean=true
mobileNo :number=123753537
myClassName:String="bg-primary"
stateNames: String ="Goa"
bank=signal("ABC")

showAlters(message:String){
  alert(message)
}

constructor(private router: Router) {}

changeName(){
  this.name="pritam"
  this.bank.set("XYZ")
}

// NavigateFun(){
// this.router.navigate("binding");
// }


}
