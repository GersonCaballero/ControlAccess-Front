import { Pipe, PipeTransform } from '@angular/core';
import { Calles } from 'app/models/Calles';

@Pipe({
  name: 'filterCalles',  
})
export class FilterCalllesPipe implements PipeTransform {
  transform(calles: Calles[], searchTerm: string): Calles[] {
    if (!calles || !searchTerm) {
      return calles;
    }
    return calles.filter(calle =>
      calle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      calle.createdBy.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}