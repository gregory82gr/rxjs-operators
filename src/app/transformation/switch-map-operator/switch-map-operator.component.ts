import { Component, OnInit } from '@angular/core';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map-operator',
  templateUrl: './switch-map-operator.component.html',
  styleUrl: './switch-map-operator.component.css'
})
export class SwitchMapOperatorComponent implements OnInit {

  ngOnInit(): void {
    let srcObservable= of(1,2,3,4)
    let innerObservable= of('A','B','C','D')
    srcObservable.pipe(
      switchMap( val => {
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
