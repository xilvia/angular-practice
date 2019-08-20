import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent implements OnInit {

  pList: Product[];
 // pList$: Observable<any> = this.productService.getAll();

  constructor(
    private productService: ProductService,
    private ar: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    // this.productService.getAll().subscribe(
    //   productAdmin => this.pList = productAdmin
    // )
    this.productService.getAll().subscribe(
      productAdminList => this.pList = productAdminList
      ) // ez a sor minden next-nél lefut a subscribe első paramétereként
      err => console.error(err)
  }

}
