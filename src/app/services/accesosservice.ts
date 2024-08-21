import { Injectable } from "@angular/core";
import { Accesos } from "app/models/Accesos";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class AccesosService {
    private apiUrl = 'https://localhost:44344/Accesos';

    constructor (private http: HttpClient) {}

    createAccesos(accesos:Accesos): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/Create`, accesos);
    }

    getAccesos(): Observable<Accesos[]> {
        return this.http.get<Accesos[]>(this.apiUrl);
    }
    
    updateAccesos(accesos: Accesos): Observable<any> {
        return this.http.put(`${this.apiUrl}/Edit/${accesos.id}`, accesos);
    }
    
    getByIdAccesos(id: number): Observable<Accesos> {
        return this.http.get<Accesos>(`${this.apiUrl}/Details/${id}`)
    }
    
    deleteByIdAccesos(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/delete/${id}`)
    }

    
}