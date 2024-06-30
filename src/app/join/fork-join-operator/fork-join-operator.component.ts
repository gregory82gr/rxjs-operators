import { Component, OnInit } from '@angular/core';
import { of, forkJoin } from 'rxjs';

@Component({
  selector: 'app-fork-join-operator',
  templateUrl: './fork-join-operator.component.html',
  styleUrl: './fork-join-operator.component.css'
})
export class ForkJoinOperatorComponent implements OnInit{

  ngOnInit(): void {
    let list1 = of(1, 2, 3, 4, 5);
    let list2 = of(6, 7, 8, 9, 10);
    let final_val = forkJoin([list1, list2]);
    final_val.subscribe(x => console.log(x));
 }
}
