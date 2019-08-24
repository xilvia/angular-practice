import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  pList: Product[];
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

  getOne(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrlP}/${id}`);
  }

  create(product): Observable<Product> {
    return this.http.post<Product>(this.apiUrlP, product);
  }

  update(product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrlP}/${product.id}`, product);
  }

  remove(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrlP}/${id}`);
  }

  // findAll(): Product[] {
  //   return this.pList;
  // }

  // find(id: number): Product {
  //   return this.product.getSelectedIndex(id);
  // }

  // private getSelectedIndex(id: number) {
  //   for (let k in this.pList) {
  //     this.pList[k].id === id? k :-1;
  //   }
    // for (var i = 0; i < this.pList.length; i++) {
    //   if (this.pList[i].id == id) {
    //     return i;
    //   }
    // }
    // return -1;
 // }
}
