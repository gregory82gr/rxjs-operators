import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event-operator',
  templateUrl: './from-event-operator.component.html',
  styleUrl: './from-event-operator.component.css'
})
export class FromEventOperatorComponent implements OnInit{

  ngOnInit(): void {
    const clicks = fromEvent(document, 'click');
    clicks.subscribe(x => console.log(x));
  }

}
