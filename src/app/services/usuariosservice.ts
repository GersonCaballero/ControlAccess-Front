import { Injectable } from "@angular/core";
import { Usuarios } from "app/models/Usuarios";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class UsuariosService {
    private apiUrl = 'https://localhost:44344/Usuarios';

    constructor (private http: HttpClient) {}

    createUsuarios(usuarios:Usuarios): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/Create`, usuarios);
    }

    getUsuarios(): Observable<Usuarios[]> {
        return this.http.get<Usuarios[]>(this.apiUrl);
    }
    
    updateUsuarios(usuarios: Usuarios): Observable<any> {
        return this.http.put(`${this.apiUrl}/Edit/${usuarios.id}`, usuarios);
    }
    
    getByIdUsuarios(id: number): Observable<Usuarios> {
        return this.http.get<Usuarios>(`${this.apiUrl}/Details/${id}`)
    }
    
    deleteByIdUsuarios(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/delete/${id}`)
    }
   
}