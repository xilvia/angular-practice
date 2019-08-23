import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-admin-edit',
  templateUrl: './product-admin-edit.component.html',
  styleUrls: ['./product-admin-edit.component.css']
})
export class ProductAdminEditComponent implements OnInit {
  
  product: Product;
  

  constructor(
    private productService: ProductService,
    private router: Router,
    private ar: ActivatedRoute,
    
  ) { }

  ngOnInit() {
    const id = (this.ar.snapshot.params['id'])
    this.productService.getOne(id).subscribe(product => { this.product = product })

    // this.ar.params.subscribe(params => {
    //   this.productService.getOne(params.id).forEach(product => {
    //     this.product = product
    //   })
    // })
  }



  onSubmit(ev: Event): void {
    ev.preventDefault();
    this.productService.update(this.product).subscribe(
      product => {
        this.router.navigateByUrl("/product-admin")
       
      }, err => console.error(err)

    )

  }

}
