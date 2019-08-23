import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product-admin',
  templateUrl: './add-product-admin.component.html',
  styleUrls: ['./add-product-admin.component.css']
})
export class AddProductAdminComponent implements OnInit {

 product: Product = new Product();


  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(ev: Event): void {
    ev.preventDefault();
    this.productService.create(this.product).subscribe(
      product => {
        this.router.navigateByUrl("/product-admin")

      }, err => console.error(err)

    )

  }
}

