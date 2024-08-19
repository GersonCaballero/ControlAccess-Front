import { Injectable } from "@angular/core";
import { TipoUsuario } from "app/models/TipoUsuario";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class TipoUsuarioService {
    private apiUrl = 'https://localhost:44344/TipoUsuarios';

    constructor (private http: HttpClient) {}

    createTipoUsuario(tipoUsuario: TipoUsuario): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/create`, tipoUsuario);
    }

    getTipoUsuario(): Observable<TipoUsuario[]> {
        return this.http.get<TipoUsuario[]>(this.apiUrl);
    }
    
    updateTipoUsuario(tipoUsuario: TipoUsuario): Observable<any> {
        return this.http.put(`${this.apiUrl}/Edit/${tipoUsuario.id}`, tipoUsuario);
    }
    
    getByIdTipoUsuario(id: number): Observable<TipoUsuario> {
        return this.http.get<TipoUsuario>(`${this.apiUrl}/Details/${id}`)
    }
    
    deleteByIdTipoUsuario(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/delete/${id}`)
    }
   
}