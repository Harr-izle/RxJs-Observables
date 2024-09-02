import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval, of, from, concat, Observable, throwError } from 'rxjs';
import { take, catchError, mergeMap, delay, switchMap } from 'rxjs/operators';



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
  error: (error) => console.log('Error:', error),
  complete: () => console.log('completed...')
});


// task two

const favoriteColors = ['Red', 'Pink', 'Green', 'Yellow', 'Purple'];

const colors$ = from(favoriteColors);

colors$.subscribe({
  next: (value) => console.log('Emitted value:', value),
  error: (error) => console.log('Error:', error),
  complete: () => console.log('completed ...')
});


// task three
const interval$ = interval(1000).pipe(take(10));

interval$.subscribe({
  next: (value) => console.log('Emitted value:', value),
  error: (error) => console.log('Error:', error),
  complete: () => console.log('completed...')
});


//task four
const numberObs$ = of(10, 20, 30);

const arrayFruits$ = from(['apple', 'banana', 'coconut', 'mango']);

const combined$ = concat(numberObs$,  arrayFruits$ );


combined$.subscribe({
  next: (value) => console.log(' emitted:', value),
  complete: () => console.log('completed...')
});


// task five
const errorObservable$ = of(1, 2, 3).pipe(
  mergeMap(value => {
    if (value === 3) {
      return throwError(() => new Error('Something went wrong!'));
    }
    return of(value);
  }),
  catchError(err => {
    console.error('Error caught:', err.message);
    return of('Recovered from error');  
  })
);
errorObservable$.subscribe({
  next: (value) => console.log('Error-handling observable emitted:', value),
  complete: () => console.log('Error-handling observable completed')
});


//Bonus
const source$ = of(12, 24, 48);

// Using switchMap 
const switched$ = source$.pipe(
  switchMap(value => of(`Switched value: ${value}`).pipe(delay(1000)))  // Simulate async operation
);
switched$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('completed...')
});









  }
}