import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from-operator',
  templateUrl: './from-operator.component.html',
  styleUrl: './from-operator.component.css'
})
export class FromOperatorComponent  implements OnInit{


  ngOnInit(): void {
    const array = [10, 20, 30];
    const result = from(array);
    result.subscribe({
      next: x => console.log(x),
      error: err => console.log('error:', err),
      complete: () => console.log('the end'),
    });
  }

}
