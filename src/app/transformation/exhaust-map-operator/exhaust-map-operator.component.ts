import { Component,OnInit } from '@angular/core';
import { exhaustMap, of, tap } from 'rxjs';

@Component({
  selector: 'app-exhaust-map-operator',
  templateUrl: './exhaust-map-operator.component.html',
  styleUrl: './exhaust-map-operator.component.css'
})
export class ExhaustMapOperatorComponent implements OnInit {
  ngOnInit(): void {
    let srcObservable= of(1,2,3,4)
    let innerObservable= of('A','B','C','D')
    srcObservable.pipe(
      tap(val => {
        console.log("Before " + val);
      }),
      exhaustMap( val => {
        console.log('Source value '+val)
        console.log('starting new observable')
        if (val == 3) {
          throw Error;
        }
        return innerObservable
      }),
      tap(
        val => {
          console.log("After " + val);
        },
        err => {
          console.log("Tap Error");
          console.log(err);
        },
        () => {
          console.log("Tap Complete");
        }
      )
    )
    .subscribe(ret=> {
      console.log('Recd ' + ret);
    })
  }

}
