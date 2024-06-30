import { Component, OnInit } from '@angular/core';
import { mergeMap, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-merge-map-operator',
  templateUrl: './merge-map-operator.component.html',
  styleUrl: './merge-map-operator.component.css'
})
export class MergeMapOperatorComponent implements OnInit {
  ngOnInit(): void {
    let srcObservable= of(1,2,3,4)
    let innerObservable= of('A','B','C','D')
    srcObservable.pipe(
      mergeMap( val => {
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
