import { Inmuebles } from "./Inmuebles"

export interface Tarifas {
    id: number
    idTipoInmuebles: number,
    inmuebles?: Inmuebles,
    monto: number,
    createdBy: string
}