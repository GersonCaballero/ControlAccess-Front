import { Inmuebles } from "./Inmuebles"

export interface Tarifas {
    id: number
    idTipoInmuebles: number,
    inmuebles?: Inmuebles,
    monto: number,
    createdBy: string,
    createdDate: Date,
    updatedBy: string,
    updatedDate: Date,
}