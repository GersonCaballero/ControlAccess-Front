import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visitantes } from 'app/models/Visitantes';
@Injectable({
  providedIn: 'root'
})

export class VisitantesService {

  private apiUrl = 'https://localhost:44344/Visitantes';

  constructor(private http: HttpClient) { }

  createVisitantes(visitantes: Visitantes): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, visitantes);
  }

  getVisitantes(): Observable<Visitantes[]> {
    return this.http.get<Visitantes[]>(this.apiUrl);
  }

  updateVisitantes(visitantes: Visitantes): Observable<any> {
    return this.http.put(`${this.apiUrl}/Edit/${visitantes.id}`, visitantes);
  }

  getByIdVisitantes(id: number): Observable<Visitantes> {
    return this.http.get<Visitantes>(`${this.apiUrl}/Details/${id}`)
  }

  deleteByIdVisitantes(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`)
  }
}