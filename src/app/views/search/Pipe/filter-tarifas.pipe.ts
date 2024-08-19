import { Pipe, PipeTransform } from '@angular/core';
import { Tarifas } from 'app/models/Tarifas';

@Pipe({
  name: 'filterTarifas',
})
export class FilterTarifasPipe implements PipeTransform {  
  transform(tarifas:Tarifas[], searchTerm: string):Tarifas[] {
    if (!tarifas || !searchTerm) {
      return tarifas;
    }
    return tarifas.filter(tarifa =>  
      tarifa.inmuebles.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tarifa.createdBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tarifa.updatedBy.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}