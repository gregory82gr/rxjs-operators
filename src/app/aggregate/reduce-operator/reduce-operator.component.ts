import { Component, OnInit } from '@angular/core';
import { of, reduce } from 'rxjs';

@Component({
  selector: 'app-reduce-operator',
  templateUrl: './reduce-operator.component.html',
  styleUrl: './reduce-operator.component.css'
})
export class ReduceOperatorComponent  implements OnInit{
  ngOnInit(): void {
    of(1, 2, 3, 4, 5)
      .pipe(reduce((acc, value) => acc + value, 0))
      .subscribe(
        val => console.log(val),
        e => console.log(e),
        () => console.log("Complete")
      );
  }

}
