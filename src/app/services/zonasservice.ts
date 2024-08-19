import { Injectable } from "@angular/core";
import { Zonas } from "app/models/Zonas";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class ZonasService {
    private apiUrl = 'https://localhost:44344/zonas';
    constructor (private http: HttpClient) {}

    createZonas(zonas:Zonas): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/Create`, zonas);
    }

    getZonas(): Observable<Zonas[]> {
        return this.http.get<Zonas[]>(this.apiUrl);
    }

    updateZonas(zonas: Zonas): Observable<any> {
        return this.http.put(`${this.apiUrl}/Edit/${zonas.id}`, zonas);
      }

    getByIdzonas(id: number): Observable<Zonas> {
        return this.http.get<Zonas>(`${this.apiUrl}/Details/${id}`)
    }

    deleteByIdzonas(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/delete/${id}`)
    }



}