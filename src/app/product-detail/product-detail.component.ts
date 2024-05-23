import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct, productList } from '../prducts/products.mock';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product?: IProduct;
  productList: IProduct[] = productList;
  loading: boolean = true;
  color: string = ''

  constructor(private _route: ActivatedRoute){
    
  }

  ngOnInit(): void {
    setTimeout(() => {
      this._route.params.subscribe(params => {
        this.product = this.productList.find(product => product.id == params['productId'])
        this.loading = false;
        this.color = this.product?.price as number <= 5 ? 'green': ''
      })
    }, 1500)
  }
}
