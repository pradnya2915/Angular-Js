import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']  // Corrected "styleUrls" (plural)
})
export class ObservablesComponent {

  data: any[] = [];

  // Create an observable
  myObservable = new Observable((observer) => {
    observer.next([1, 2, 3, 4, 5]);
    observer.complete();  // Optionally complete the observable
  });

  // Function to get asynchronous data
  GetAsynchData() {
    this.myObservable.subscribe({
      next: (val: any) => {
        this.data = val;
      },
      error: (err) => console.error('Error occurred: ', err),
      complete: () => console.log('Observable completed!')  // Logs when observable completes
    });
  }
}
