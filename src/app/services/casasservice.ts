import { Injectable } from "@angular/core";
import { Casas } from "app/models/Casas";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class CasasService {
    private apiUrl = 'https://localhost:44344/casas';
    constructor (private http: HttpClient) {}

    createCasas(casas: Casas): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/Create`, casas);
    }

    getCasas(): Observable<Casas[]> {
        return this.http.get<Casas[]>(this.apiUrl);
    }

    updateCasas(casas: Casas): Observable<any> {
        return this.http.put(`${this.apiUrl}/Edit/${casas.id}`, casas);
      }

    getByIdCasas(id: number): Observable<Casas> {
        return this.http.get<Casas>(`${this.apiUrl}/Details/${id}`)
    }

    deleteByIdCasas(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/delete/${id}`)
    }



}