import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-array-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './array-binding.component.html',
  styleUrl: './array-binding.component.css'
})
export class ArrayBindingComponent {

  title="hello everyone"
   
  myArr=["car","bike","cycle","honda"];


  Arr=[
    {
      name:"pradnya",
      age:23,
      email:"pradnyabhor@gmail.com"
    },
    {
      name:"payal",
      age:23,
      email:"payalbhor@gmail.com"
    },
    {
      name: "mohini",
      age: 23,
      email: "rohinibhor@gmail.com"
    },
    {
      name:"pratik",
      age:23,
      email:"pratikbhor@gmail.com"
    }
  ]

  islogged=false;


  // choice="";
  // selectColor(dropdata){
  //   this.choice=dropdata.target.value;

  // }

  ArrloadMoreEmployee=[
    {
      name:"pradnya",
      age:23,
      email:"pradnyabhor@gmail.com"
    },
    {
      name:"payal",
      age:23,
      email:"payalbhor@gmail.com"
    },
    {
      name: "mohini",
      age: 23,
      email: "rohinibhor@gmail.com"
    },
    {
      name:"pratik",
      age:23,
      email:"pratikbhor@gmail.com"
    }
  ]

}
