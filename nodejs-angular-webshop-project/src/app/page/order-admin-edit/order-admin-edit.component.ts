import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from '../../model/order';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-order-admin-edit',
  templateUrl: './order-admin-edit.component.html',
  styleUrls: ['./order-admin-edit.component.css']
})
export class OrderAdminEditComponent implements OnInit {

  order: Order;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private ar: ActivatedRoute
  ) { }

  
  ngOnInit() {
    const id = + (this.ar.snapshot.params['id'])
    this.orderService.getOne(id).subscribe(order => {this.order = order})
  }

  onSubmit(ev: Event): void {
    ev.preventDefault();
    this.orderService.update(this.order).subscribe(
      order => {
        this.router.navigateByUrl("/order-admin")
        // this.changeCounter++;
      }, err => console.error(err)

    )

  }


}
