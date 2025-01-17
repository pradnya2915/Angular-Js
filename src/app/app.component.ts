import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from 'express';

// import { ArrayBindingComponent } from './array-binding/array-binding.component';
// import { TableFormatComponent } from './table-format/table-format.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pro_angular';

  
}
