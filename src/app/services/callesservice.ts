import { Injectable } from "@angular/core";
import { Calles } from "app/models/Calles";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class CallesService {
    private apiUrl = 'https://localhost:44344/Calles';

    constructor (private http: HttpClient) {}

    createCalles(calles: Calles): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/Create`, calles);
    }

    getCalles(): Observable<Calles[]> {
        return this.http.get<Calles[]>(this.apiUrl);
    }
    
    updateCalles(calles: Calles): Observable<any> {
        return this.http.put(`${this.apiUrl}/Edit/${calles.id}`, calles);
      }
    
    getByIdCalles(id: number): Observable<Calles> {
        return this.http.get<Calles>(`${this.apiUrl}/Details/${id}`)
    }
    
    deleteByIdCalles(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/delete/${id}`)
    }
   
}