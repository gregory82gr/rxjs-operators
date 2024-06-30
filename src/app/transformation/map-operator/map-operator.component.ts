import { Component, OnInit } from '@angular/core';
import { from,  map } from 'rxjs';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrl: './map-operator.component.css'
})
export class MapOperatorComponent implements OnInit{
  srcArray = from([1, 2, 3, 4]);
  ngOnInit(): void {
    this.srcArray
    .pipe(
      map(val => { return val * 2}
    ))
    .subscribe(val => { console.log(val)})
  }
}
