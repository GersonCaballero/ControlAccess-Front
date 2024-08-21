import { Pipe, PipeTransform } from '@angular/core';
import { Visitantes } from 'app/models/Visitantes';

@Pipe({
  name: 'filterVisitantes',  
})
export class FilterVisitantesPipe implements PipeTransform {
  transform(visitantes: Visitantes[], searchTerm: string): Visitantes[] {
    if (!visitantes || !searchTerm) {
      return visitantes;
    }
    return visitantes.filter(visitante =>
      visitante.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      visitante.apellido.toLowerCase().includes(searchTerm.toLowerCase()) ||
      visitante.numeroIdentidad.toLowerCase().includes(searchTerm.toLowerCase()) ||
      visitante.telefono.toLowerCase().includes(searchTerm.toLowerCase()) ||
      visitante.motivo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      visitante.observaciones.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}