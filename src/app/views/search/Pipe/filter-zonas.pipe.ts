import { Pipe, PipeTransform } from '@angular/core';
import { Zonas } from 'app/models/Zonas';

@Pipe({
  name: 'filterZonas',
})
export class FilterZonaPipe implements PipeTransform {
  transform(zonas:Zonas[], searchTerm: string):Zonas[] {
    if (!zonas || !searchTerm) {
      return zonas;
    }
    return zonas.filter(zona =>
      zona.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}