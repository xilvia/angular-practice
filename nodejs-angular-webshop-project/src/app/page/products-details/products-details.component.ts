import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { OrderService } from 'src/app/service/order.service';
import { Order } from 'src/app/model/order';
 
 
@Component({
 selector: 'app-products-details',
 templateUrl: './products-details.component.html',
 styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
 
 order: Order = {
   id:0,
   insdate: null,
   product: 0,
   userName: '',
   userEmail: '',
   shippingAddress: '',
   quantity: 0
 };
 product: Product;
 counter: number = 0;
 cart: any[];
 total: number = 0;
 
 constructor(
   private router: Router,
   private ar: ActivatedRoute,
   private productService: ProductService,
   private orderService: OrderService
 ) { }
 
 ngOnInit() {
   const id = + (this.ar.snapshot.params['id'])
   this.productService.getOne(id).subscribe(product => { this.product = product });
 }
 
 addToCart(id: number): void {
   const idForCart = this.ar.snapshot.params['id'];
   id = idForCart;
 
   this.cart = [{
     id: this.product.id,
     name: this.product.name,
     type: this.product.type,
     picture: this.product.picture,
     description: this.product.description,
     color: this.product.color,
     price: this.product.price
   }];
 
   this.order.id = this.product.id;
   console.log(this.cart);
 
   this.counter += 1;
   this.total = this.counter * this.product.price;
 }
 
 removeItem(id: number): void {
   const index = this.cart.findIndex(item => item.id === id);
   this.cart.splice(index, 1);
   console.log(this.cart.length)
 
   this.counter = 0;
   this.total = 0;
 }
 
 onSubmit(ev: Event): void {
   ev.preventDefault();
   this.order.id = Date.now();
   this.order.product = this.product.id;
   this.order.insdate = new Date();
 
   console.log(this.order);
 
   this.orderService.create(this.order).subscribe(
     order => {
       this.router.navigateByUrl("/products")
     }, err => console.error(err)
 
   )
 
 }
 
}


