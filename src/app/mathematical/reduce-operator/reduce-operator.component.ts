import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-reduce-new-operator',
  templateUrl: './reduce-operator.component.html',
  styleUrl: './reduce-operator.component.css'
})
export class ReduceNewOperatorComponent  implements OnInit{

   products = [
    {product1: "A", price: 10000.00},
    {product2: "B", price: 7500.00},
    {product3: "C", price: 2000.00},
    {product4: "D", price: 4500.00}
  ];
  ngOnInit(): void {

    let final_val = from(this.products).pipe(reduce((acc, productsdet) => acc+productsdet.price, 0));
    final_val.subscribe(x => console.log("Total Price of Products is: "+x));
  }
}
