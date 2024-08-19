import { Injectable } from "@angular/core";
import { Bloques } from "app/models/Bloques";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class BloquesService {
    private apiUrl = 'https://localhost:44344/Bloques';
    constructor (private http: HttpClient) {}

    createBloques(bloques:Bloques): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/Create`, bloques);
    }

    getBloque(): Observable<Bloques[]> {
        return this.http.get<Bloques[]>(this.apiUrl);
    }

    updateBloques(bloques: Bloques): Observable<any> {
        return this.http.put(`${this.apiUrl}/Edit/${bloques.id}`, bloques);
    }

    getByIdBloques(id: number): Observable<Bloques> {
        return this.http.get<Bloques>(`${this.apiUrl}/Details/${id}`)
    }

    deleteByIdBloques(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/delete/${id}`)
    }



}