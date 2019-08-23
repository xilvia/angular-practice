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

  // routeToEdit(product: Product) {
  //   this.router.navigateByUrl(`/product-admin/${product.id}`)
  // }

  ngOnInit() {
    // this.productService.getAll().subscribe(
      // productAdmin => this.pList = productAdmin
    // )
    this.productService.getAll().subscribe(
      productAdminList => this.pList = productAdminList
      ) // ez a sor minden next-nél lefut a subscribe első paramétereként
      err => console.error(err)
  }

  onDelete(product: Product) {
    if (confirm(`Are you sure to delete ${product.id}?`))
      this.productService.remove(product.id).subscribe(
        response => {
          let index = this.pList.indexOf(product);
          this.pList.splice(index, 1);
         
        },
        err => console.error(err)
      )
  }
}
