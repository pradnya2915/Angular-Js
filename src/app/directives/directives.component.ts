import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

isDiv1Visiable: boolean=true;
idDiv2Visible: boolean=false;

num1: string= '';
num2: string='';

isActive:boolean=false;

stateName: string='';

showDiv1(){
  this.isDiv1Visiable=true;
}
hideDiv1(){
  this.isDiv1Visiable=false;
}

toggleDiv2(){
  this.idDiv2Visible=!this.idDiv2Visible
}
}
