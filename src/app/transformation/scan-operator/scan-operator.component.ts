import { Component, OnInit } from '@angular/core';
import { of, scan } from 'rxjs';

@Component({
  selector: 'app-scan-operator',
  templateUrl: './scan-operator.component.html',
  styleUrl: './scan-operator.component.css'
})
export class ScanOperatorComponent  implements OnInit{
  ngOnInit(): void {
    of(1, 2, 3, 4, 5)
      .pipe(
        scan(
          (acc, value) => acc + value, 0
        ))
      .subscribe(
        val => console.log(val),
        e => console.log(e),
        () => console.log("Complete")
      );
  }
}
