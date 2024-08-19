import { Injectable } from "@angular/core";
import { Reportes } from "app/models/Reportes";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class ReportesService {
    private apiUrl = 'https://localhost:44344/Reportes';

    constructor (private http: HttpClient) {}

    createReportes(reportes: Reportes): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/Create`, reportes) ;
    }

    getReportes(): Observable<Reportes[]> {
        return this.http.get<Reportes[]>(this.apiUrl);
    }
    
    updateReportes(reportes:  Reportes): Observable<any> {
        return this.http.put(`${this.apiUrl}/Edit/${reportes. id}`, reportes) ;
    }
    
    getByIdReportes(id: number): Observable<Reportes> {
        return this.http.get<Reportes>(`${this.apiUrl}/Details/${id}`)
    }
    
    deleteByIdReportes(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/delete/${id}`)
    }

    
}