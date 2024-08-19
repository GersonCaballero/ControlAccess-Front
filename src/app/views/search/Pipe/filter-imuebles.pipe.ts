import { Pipe, PipeTransform } from '@angular/core';
import { Inmuebles } from 'app/models/Inmuebles';

@Pipe({
  name: 'filterInmuebles',
})
export class FilterInmueblesPipe implements PipeTransform {
  transform(inmuebles:Inmuebles[], searchTerm: string):Inmuebles[] {
    if (!inmuebles || !searchTerm) {
      return inmuebles;
    }
    return inmuebles.filter(inmueble =>
      inmueble.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inmueble.createdBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inmueble.updatedBy.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}