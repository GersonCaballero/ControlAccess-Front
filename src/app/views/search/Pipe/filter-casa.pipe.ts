import { Pipe, PipeTransform } from '@angular/core';
import {Casas } from 'app/models/Casas';

@Pipe({
  name: 'filterCasas',
})
export class FilterCasasPipe implements PipeTransform {
  transform(casas:Casas[], searchTerm: string):Casas[] {
    if (!casas || !searchTerm) {
      return casas;
    }
    return casas.filter(casa =>
      casa.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      casa.createdBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
      casa.updatedBy.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}