import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

<<<<<<< HEAD
  orders: Order[] = [
    new Order(),
    new Order(),
    new Order()
  ]
=======
  apiUrl: string = 'http://localhost:3210/orders';
>>>>>>> 8c53cdeae1bbb2d4a0a0bff324a453d3c632d8cc

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);

    // return new Observable(observer => {
    //   observer.next(this.orders);
    // });

    // amíg nem megy innen http-kérés, addig mock-adatokkal dolgozunk
  }
}
