import { Pipe, PipeTransform } from '@angular/core';
import { Accesos } from 'app/models/Accesos';

@Pipe({
  name: 'filterAccesos',  
})
export class FilterAccesosPipe implements PipeTransform {
  transform(accesos: Accesos[], searchTerm: string): Accesos[] {
    if (!accesos || !searchTerm) {
      return accesos;
    }
    return accesos.filter(acceso =>
      acceso.usuario.nombre.toLowerCase().includes(searchTerm.toLowerCase())  ||
      acceso.visitante.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      acceso.tipoAcceso.toLowerCase().includes(searchTerm.toLowerCase()) ||
      acceso.vehiculo.placa.toLowerCase().includes(searchTerm.toLowerCase()) ||
      acceso.casa.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}