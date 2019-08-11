import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  get(id: any): User {
    throw new Error("Method not implemented.");
  }

  jsonUrl: string = 'http://localhost:3000/user';
  

  constructor(
    private http: HttpClient
  ) { this.http.get(this.jsonUrl).subscribe(
    list => console.log(list)

  ); }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.jsonUrl);
  }

  getOne(id: number): Observable<User> {
    return this.http.get<User>(`${this.jsonUrl}/${id}`);
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.jsonUrl, user);
  }

  remove(id: number): Observable<User> {
    return this.http.delete<User>(`${this.jsonUrl}/${id}`);
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(`${this.jsonUrl}/${user.id}`, user); 
  }
}
