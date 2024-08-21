import { Pipe, PipeTransform } from '@angular/core';
import { Incidencias } from 'app/models/Incidencias';

@Pipe({
  name: 'filterIncidencias',  
})
export class FilterIncidenciasPipe implements PipeTransform {
  transform(incidencias: Incidencias[], searchTerm: string): Incidencias[] {
    if (!incidencias || !searchTerm) {
      return incidencias;
    }
    return incidencias.filter(incidencia =>
      incidencia.descripcion.toLowerCase().includes(searchTerm.toLowerCase())  ||
      incidencia.estado.toLowerCase().includes(searchTerm.toLowerCase()) ||
      incidencia.tipo.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}