import { Pipe, PipeTransform } from '@angular/core';
import { Reportes } from 'app/models/Reportes';

@Pipe({
  name: 'filterReportes',  
})
export class FilterReportesPipe implements PipeTransform {
  transform(reportes: Reportes[], searchTerm: string): Reportes[] {
    if (!reportes || !searchTerm) {
      return reportes;
    }
    return reportes.filter(reporte =>
      reporte.tipoReporte.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reporte.contenido.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}