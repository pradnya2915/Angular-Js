import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-statement',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './statement.component.html',
  styleUrl: './statement.component.css'
})
export class StatementComponent {
   showOption=false;
   selectionOption="Angular";
   toggleOption(): void{
    this.showOption=!this.showOption;
   }
}
