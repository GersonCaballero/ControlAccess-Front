import { Injectable } from "@angular/core";
import { Tarifas } from "app/models/Tarifas";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class TarifasService {
    private apiUrl = 'https://localhost:44344/Tarifas';

    constructor (private http: HttpClient) {}

    createTarifas(tarifas:Tarifas): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/Create`, tarifas);
    }

    getTarifas(): Observable<Tarifas[]> {
        return this.http.get<Tarifas[]>(this.apiUrl);
    }
    
    updateTarifas(tarifas: Tarifas): Observable<any> {
        return this.http.put(`${this.apiUrl}/Edit/${tarifas.id}`, tarifas);
      }
    
    getByIdTarifas(id: number): Observable<Tarifas> {
        return this.http.get<Tarifas>(`${this.apiUrl}/Details/${id}`)
    }
    
    deleteByIdTarifas(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/delete/${id}`)
    }
   
}