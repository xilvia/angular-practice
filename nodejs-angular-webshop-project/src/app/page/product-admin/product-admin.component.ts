import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent implements OnInit {

  pList: Product[] = [];
  pList$: Observable<any> = this.productService.getAll();

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
  }

}
