import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from 'src/app/service/order.service';
import { Order } from 'src/app/model/order';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-admin',
  templateUrl: './order-admin.component.html',
  styleUrls: ['./order-admin.component.css']
})
export class OrderAdminComponent implements OnInit {

  orderKey: string = '';
  orderDirection: number = 1;

  list: Order[] = [];
  list$: Observable<any> = this.orderService.getAll();
  //$ - ez nem adat, hanem egy observable, ami az adatot körülveszi
  constructor(
    private orderService: OrderService,
    private ar: ActivatedRoute,
    private router: Router

  ) { }

  // setSorterKey(key: string): void {
  //   if (key === this.orderKey) {
  //     this.orderDirection = this.orderDirection === -1 ? 1 : -1;
  //   } else {
  //     this.orderDirection = 1;
  //   }

  //   this.orderKey = key;
  // }

  ngOnInit() {
    // this.orderService.getAll().subscribe(
    //   orders => this.list = orders, // ez a sor minden next-nél lefut a subscribe első paramétereként
    //   err => console.error(err)
    // a getAll observable-t ad vissza, amire itt iratkozom fel
    // a subscribe-ban írom le, mit csináljunk az adattal, ami visszajön
    // --> amit a subscribe visszaad, a this.list, ez lesz maga az orders tömb, egyenlővé teszem az osztállyal
    //) - ami itt le volt írva, kiváltható ezzel: list$: Observable<any> = this.orderService.getAll(); 
    // a html-ben: {{ list$ | async | json }} ---> az egész a subscribe-ot váltja ki

  }

}
