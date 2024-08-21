import { Pipe, PipeTransform } from '@angular/core';
import { Vehiculos } from 'app/models/Vehiculos';

@Pipe({
  name: 'filterVehiculos',  
})
export class FilterVehiculosPipe implements PipeTransform {
  transform(vehiculos: Vehiculos[], searchTerm: string): Vehiculos[] {
    if (!vehiculos || !searchTerm) {
      return vehiculos;
    }
    return vehiculos.filter(vehiculo =>
      vehiculo.placa.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehiculo.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehiculo.modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehiculo.color.toLowerCase().includes(searchTerm.toLowerCase())       
    );
  }
}