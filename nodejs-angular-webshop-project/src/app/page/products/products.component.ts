import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { OrderService } from 'src/app/service/order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  pList: Product[];

  // prodlist$: Observable<any> = this.productService.getAll();
  //$ - ez nem adat, hanem egy observable, ami az adatot körülveszi
  constructor(
    private productService: ProductService,
    private ar: ActivatedRoute,
    private router: Router

  ) { }

  // routeToDetails(product: Product) {
  //   this.router.navigateByUrl(`/product-details/${product.id}`)
  // }
 
  ngOnInit() {
    this.productService.getAll().subscribe(
      productList => this.pList = productList
    ) // ez a sor minden next-nél lefut a subscribe első paramétereként
    err => console.error(err)
  }

}


