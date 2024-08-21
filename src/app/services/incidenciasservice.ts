import { Injectable } from "@angular/core";
import { Incidencias } from "app/models/Incidencias";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class IncidenciasService {
    private apiUrl = 'https://localhost:44344/Incidencias';

    constructor (private http: HttpClient) {}

    createIncidencias(incidencias:Incidencias): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/Create`, incidencias);
    }

    getIncidencias(): Observable<Incidencias[]> {
        return this.http.get<Incidencias[]>(this.apiUrl);
    }
    
    updateIncidencias(incidencias: Incidencias): Observable<any> {
        return this.http.put(`${this.apiUrl}/Edit/${incidencias.id}`, incidencias);
    }
    
    getByIdIncidencias(id: number): Observable<Incidencias> {
        return this.http.get<Incidencias>(`${this.apiUrl}/Details/${id}`)
    }
    
    deleteByIdIncidencias(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/delete/${id}`)
    }

    
}