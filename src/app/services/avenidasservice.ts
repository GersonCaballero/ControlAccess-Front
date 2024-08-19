import { Injectable } from "@angular/core";
import { Avenidas } from "app/models/Avenidas";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class AvenidasService {
    private apiUrl = 'https://localhost:44344/Avenidas';

    constructor (private http: HttpClient) {}

    createAvenidas(avenidas:Avenidas): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/Create`, avenidas);
    }

    getAvenidas(): Observable<Avenidas[]> {
        return this.http.get<Avenidas[]>(this.apiUrl);
    }
    
    updateAvenidas(avenidas: Avenidas): Observable<any> {
        return this.http.put(`${this.apiUrl}/Edit/${avenidas.id}`, avenidas);
    }
    
    getByIdAvenidas(id: number): Observable<Avenidas> {
        return this.http.get<Avenidas>(`${this.apiUrl}/Details/${id}`)
    }
    
    deleteByIdAvenidas(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/delete/${id}`)
    }

    
}