export interface Visitantes {
    id: number;
    nombre: string;
    apellido: string;
    numeroIdentidad: string;
    telefono: string;
    motivo: string;
    observaciones: string;
    createdBy: string;
    createdDate: Date | string;
    updatedBy: string;
    updatedDate:Date | string;
}