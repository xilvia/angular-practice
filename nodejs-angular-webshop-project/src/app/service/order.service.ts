import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl: string = 'http://localhost:3210/orders';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);
    // getAll(): Observable<Order[]> {
    //   return this.http.get<Order[]>(this.apiUrlP);

    // return new Observable(observer => {
    //   observer.next(this.orders);
    // });

    // amíg nem megy innen http-kérés, addig mock-adatokkal dolgozunk
  }

  getOne(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`)
  }

  create(order): Observable<any> {
    return this.http.post(this.apiUrl, order)
  }

  update(order): Observable<any> {
    return this.http.put(`${this.apiUrl}/${order.id}`, order)
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

}
