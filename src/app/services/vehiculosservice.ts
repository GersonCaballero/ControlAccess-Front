import { Injectable } from "@angular/core";
import { Vehiculos } from "app/models/Vehiculos";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class VehiculosService {
    private apiUrl = 'https://localhost:44344/Vehiculos';

    constructor (private http: HttpClient) {}

    createVehiculos(vehiculos:Vehiculos): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/Create`, vehiculos);
    }

    getVehiculos(): Observable<Vehiculos[]> {
        return this.http.get<Vehiculos[]>(this.apiUrl);
    }
    
    updateVehiculos(vehiculos: Vehiculos): Observable<any> {
        return this.http.put(`${this.apiUrl}/Edit/${vehiculos.id}`, vehiculos);
    }
    
    getByIdVehiculos(id: number): Observable<Vehiculos> {
        return this.http.get<Vehiculos>(`${this.apiUrl}/Details/${id}`)
    }
    
    deleteByIdVehiculos(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/delete/${id}`)
    }

    
}