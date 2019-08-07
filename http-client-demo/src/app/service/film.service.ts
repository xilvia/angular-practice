import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../model/film';

@Injectable({
  providedIn: 'root'
})

export class FilmService {
  jsonUrl: string = 'http://localhost:3000/film'

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Film[]> {
    return this.http.get<Film[]>(this.jsonUrl);
  }

  getOne(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.jsonUrl}/${id}`);
  }

  create(film: Film): Observable<Film> {
    return this.http.post<Film>(this.jsonUrl, film);
  }

  remove(id: number): Observable<Film> {
    return this.http.delete<Film>(`${this.jsonUrl}/${id}`);
  }

  update(film: Film): Observable<Film> {
    return this.http.put<Film>(`${this.jsonUrl}/${film.id}`, film); // annak a filmnek az id-je, amit paraméternek adtam
  }
}
