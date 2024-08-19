import { Pipe, PipeTransform } from '@angular/core';
import { Avenidas } from 'app/models/Avenidas';

@Pipe({
  name: 'filterAvenidas',  
})
export class FilterAvenidasPipe implements PipeTransform {
  transform(avenidas: Avenidas[], searchTerm: string): Avenidas[] {
    if (!avenidas || !searchTerm) {
      return avenidas;
    }
    return avenidas.filter(avenida =>
      avenida.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      avenida.createdBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
      avenida.updatedBy.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
  }
}