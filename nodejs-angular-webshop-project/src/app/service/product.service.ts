import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = 'http://localhost:3210/products';

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
