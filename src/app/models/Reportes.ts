export interface Reportes {
  id: number;
  tipoReporte: string;
  fechaHoraGeneracion: Date  | string;
  contenido: string;
  usuarioId: number;
  createdBy: string;
  createdDate: Date | string;
  updatedBy: string;
  updatedDate: Date| string;
}