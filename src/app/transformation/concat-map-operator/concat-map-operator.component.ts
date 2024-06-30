import { Component, OnInit } from '@angular/core';
import { concatMap, of } from 'rxjs';

@Component({
  selector: 'app-concat-map-operator',
  templateUrl: './concat-map-operator.component.html',
  styleUrl: './concat-map-operator.component.css'
})
export class ConcatMapOperatorComponent implements OnInit {
  ngOnInit(): void {
    let srcObservable= of(1,2,3,4)
    let innerObservable= of('A','B','C','D')
    srcObservable.pipe(
      concatMap( val => {
        console.log('Source value '+val)
        console.log('starting new observable')
        return innerObservable
      })
    )
    .subscribe(ret=> {
      console.log('Recd ' + ret);
    })
  }

}
