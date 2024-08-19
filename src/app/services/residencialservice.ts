import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Residencial } from 'app/models/Residencial';
@Injectable({
  providedIn: 'root'
})

export class ResidencialService {

  private apiUrl = 'https://localhost:44344/Residencials';  // Cambia esta URL por la URL de tu API

  constructor(private http: HttpClient) { }

  createResidencial(residencial: Residencial): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, residencial);
  }

  getResidencials(): Observable<Residencial[]> {
    return this.http.get<Residencial[]>(this.apiUrl);
  }

  updateResidencial(residencial: Residencial): Observable<any> {
    return this.http.put(`${this.apiUrl}/Edit/${residencial.id}`, residencial);
  }

  getByIdResidencial(id: number): Observable<Residencial> {
    return this.http.get<Residencial>(`${this.apiUrl}/Details/${id}`)
  }

  deleteByIdResidencial(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`)
  }
}