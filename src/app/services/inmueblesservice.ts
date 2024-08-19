import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inmuebles } from 'app/models/Inmuebles';

@Injectable({
  providedIn: 'root'
})

export class InmueblesService {

  private apiUrl = 'https://localhost:44344/Inmuebles';  // Cambia esta URL por la URL de tu API

  constructor(private http: HttpClient) { }

  createInmuebles(inmuebles: Inmuebles): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, inmuebles);
  }

  getInmuebles(): Observable<Inmuebles[]> {
    return this.http.get<Inmuebles[]>(this.apiUrl);
  }

  updateInmuebles(inmuebles: Inmuebles): Observable<any> {
    return this.http.put(`${this.apiUrl}/Edit/${inmuebles.id}`, inmuebles);
  }

  getByIdInmuebles(id: number): Observable<Inmuebles> {
    return this.http.get<Inmuebles>(`${this.apiUrl}/Details/${id}`)
  }

  deleteByIdInmuebles(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`)
  }
}