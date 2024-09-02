import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval, of, from, concat, Observable, throwError } from 'rxjs';
import { take, catchError } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RxJs-Observables';





  constructor() {

      // task One
const numbers$ = of(100, 101, 102, 103, 104);
numbers$.subscribe({
  next: (value) => console.log('Emitted value:', value),
  complete: () => console.log('Observable completed')
});


// task two

const favoriteColors = ['Red', 'Pink', 'Green', 'Yellow', 'Purple'];

const colors$ = from(favoriteColors);

colors$.subscribe({
  next: (value) => console.log('Emitted value:', value),
  complete: () => console.log('Observable completed')
});


// task three
const interval$ = interval(1000).pipe(take(10));

interval$.subscribe({
  next: (value) => console.log('Emitted value:', value),
  complete: () => console.log('Observable completed')
});











  }
}