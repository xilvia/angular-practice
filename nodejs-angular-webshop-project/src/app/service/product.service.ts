import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrlP: string = 'http://localhost:3210/products';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrlP);

    // return new Observable(observer => {
    //   observer.next(this.products);
    // });

    // amíg nem megy innen http-kérés, addig mock-adatokkal dolgozunk
  }
}
