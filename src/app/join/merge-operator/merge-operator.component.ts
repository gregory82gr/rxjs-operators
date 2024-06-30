import { Component, OnInit } from '@angular/core';
import { of, merge, Observable } from 'rxjs';

@Component({
  selector: 'app-merge-operator',
  templateUrl: './merge-operator.component.html',
  styleUrl: './merge-operator.component.css'
})
export class MergeOperatorComponent implements OnInit
{
   list1 = of(1, 2, 3, 4, 5);
   list2 = of(4, 5, 6, 7, 8, 9, 10) ;

   final_val:Observable<Number> = merge(this.list1, this.list2);

  ngOnInit(): void {
    this.final_val.subscribe(x => console.log(x));
  }

  constructor(){

  }

}
