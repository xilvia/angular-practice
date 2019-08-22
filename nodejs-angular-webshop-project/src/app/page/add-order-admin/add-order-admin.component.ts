import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/order';


@Component({
  selector: 'app-add-order-admin',
  templateUrl: './add-order-admin.component.html',
  styleUrls: ['./add-order-admin.component.css']
})
export class AddOrderAdminComponent implements OnInit {

  order: Order = new Order;

  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  
  onSubmit(ev: Event): void {
    ev.preventDefault();
    this.orderService.create(this.order).subscribe(
      order => {
        this.router.navigateByUrl("/order-admin")

      }, err => console.error(err)

    )

  }
}
