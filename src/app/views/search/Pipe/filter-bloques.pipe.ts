import { Pipe, PipeTransform } from '@angular/core';
import { Bloques } from 'app/models/Bloques';

@Pipe({
  name: 'filterBloque',
})
export class FilterBloquesPipe implements PipeTransform {
  transform(bloques: Bloques[], searchTerm: string): Bloques[] {
    if (!bloques || !searchTerm) {
      return bloques;
    }
    return bloques.filter(avenida =>
      avenida.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      avenida.createdBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
      avenida.updatedBy.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}