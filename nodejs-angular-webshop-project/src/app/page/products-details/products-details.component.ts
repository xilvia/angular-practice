import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
 
  // private items: Item[] = [];
  // private total: number = 0;

  constructor(
    private ar: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {

    // this.ar.params.subscribe(params => {
    //   var id = params['id'];
    //   if (id) {
    //     var item: Item = {
    //       product: this.productService.find(id),
    //       quantity: 1
    //     };
    //     if (localStorage.getItem('cart') == null) {
    //       let cart: any = [];
    //       cart.push(JSON.stringify(item));
    //       localStorage.setItem('cart', JSON.stringify(cart));
    //     } else {
    //       let cart: any = JSON.parse(localStorage.getItem('cart'));
    //       let index: number = -1;
    //       for (var i = 0; i < cart.length; i++) {
    //         let item: Item = JSON.parse(cart[i]);
    //         if (item.product.id == id) {
    //           index = i;
    //           break;
    //         }
    //       }
    //       if (index == -1) {
    //         cart.push(JSON.stringify(item));
    //         localStorage.setItem('cart', JSON.stringify(cart));
    //       } else {
    //         let item: Item = JSON.parse(cart[index]);
    //         item.quantity += 1;
    //         cart[index] = JSON.stringify(item);
    //         localStorage.setItem("cart", JSON.stringify(cart));
    //       }
    //     }
    //     this.loadCart();
    //   } else {
    //     this.loadCart();
    //   }
    // });
  }
  // loadCart(): void {
  //   this.total = 0;
  //   this.items = [];
  //   let cart = JSON.parse(localStorage.getItem('cart'));
  //   for (var i = 0; i < cart.length; i++) {
  //     let item = JSON.parse(cart[i]);
  //     this.items.push({
  //       product: item.product,
  //       quantity: item.quantity
  //     });
  //     this.total += item.product.price * item.quantity;
  //   }
  // }

  // remove(id: number): void {
  //   let cart: any = JSON.parse(localStorage.getItem('cart'));
  //   let index: number = -1;
  //   for (var i = 0; i < cart.length; i++) {
  //     let item: Item = JSON.parse(cart[i]);
  //     if (item.product.id == id) {
  //       cart.splice(i, 1);
  //       break;
  //     }
  //   }
  //   localStorage.setItem("cart", JSON.stringify(cart));
  //   this.loadCart();
  // }

}