import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';


import { PipesPipe } from '../pipes.pipe';
import { PipesssPipe } from '../pipesss.pipe';
import { json } from 'stream/consumers';



@Component({
  selector: 'app-table-format',
  standalone: true,
  imports: [PipesssPipe, CommonModule, JsonPipe],
  templateUrl: './table-format.component.html',
  styleUrl: './table-format.component.css'
})
export class TableFormatComponent {

  today = Date.now();


  title = "welcome to my world";

  student: any = {
    name: "pradnya",
    city: "pune",
    empId: "234",
    state: ''
  }

  employee = [
    {
      name: "pradnya",
      age: 23,
      email: "pradnyabhor@gmail.com",
      salary: "234724",
      states: "Maharatra"
    },
    {
      name: "payal",
      age: 23,
      email: "payalbhor@gmail.com",
      salary: "234724",
      states: "Maharatra"

    },
    {
      name: "mohini",
      age: 23,
      email: "rohinibhor@gmail.com",
      salary: "234724"
    },
    {
      name: "pratik",
      age: 23,
      email: "pratikbhor@gmail.com",
      salary: "234724"
    }
  ]


};
