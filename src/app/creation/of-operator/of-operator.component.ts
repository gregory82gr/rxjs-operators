import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of-operator',
  templateUrl: './of-operator.component.html',
  styleUrl: './of-operator.component.css'
})
export class OfOperatorComponent  implements OnInit{

  ngOnInit(): void {
    of(10, 20, 30)
      .subscribe({
        next: value => console.log('next:', value),
        error: err => console.log('error:', err),
        complete: () => console.log('the end'),
      });
  }

}
