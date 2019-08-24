import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  product: Product;
  pList: Product[];
  counter: number = 0;
  cart: [{
    id: number,
    name: string,
    type: string,
    description: string,
    color: string,
    price: number
  }];
  total: number = 0;

  constructor(
    private ar: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    const id = + (this.ar.snapshot.params['id'])
    this.productService.getOne(id).subscribe(product => { this.product = product });
    this.productService.getAll().subscribe(productList => { this.pList = productList })
  }

  addToCart(id): void {
    // this.counter += 1;
    const idForCart = this.ar.snapshot.params['id'];
    id = idForCart;

    //console.log(this.pList)
    let selectedObj = {}
    this.pList.forEach(selectedItem => selectedItem.id === this.product.id ? selectedObj = this.product : -1)
    {
      // this.cart.push(selectedObj);
      this.cart = [{
        id: this.product.id,
        name: this.product.name,
        type: this.product.type,
        description: this.product.description,
        color: this.product.color,
        price: this.product.price
      }]
      console.log(this.cart);
      //console.log(this.product.price)

      this.counter += 1;
      this.total = this.counter * this.product.price;
    }
  }

}
