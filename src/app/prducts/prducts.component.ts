import { Component } from '@angular/core';
import { productList } from './products.mock';

@Component({
  selector: 'app-prducts',
  templateUrl: './prducts.component.html',
  styleUrls: ['./prducts.component.css']
})
export class PrductsComponent {
  productList = productList;
  
}
