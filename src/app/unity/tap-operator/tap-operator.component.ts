import { Component, OnInit } from '@angular/core';
import { of, tap } from 'rxjs';

@Component({
  selector: 'app-tap-operator',
  templateUrl: './tap-operator.component.html',
  styleUrl: './tap-operator.component.css'
})
export class TapOperatorComponent implements OnInit {


  ngOnInit(): void {
    const source = of(1, 2, 3, 4, 5);
    source.pipe(
      tap((val) => {
        //val=val+1;
        console.log('Tap ' + val);
      })
    )
    .subscribe({ next: (val) => console.log('at Subscriber ' + val) });
   }
}
