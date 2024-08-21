import { Pipe, PipeTransform } from '@angular/core';
import { TipoUsuario } from 'app/models/TipoUsuario';

@Pipe({
  name: 'filterTipoUsuario',
})
export class FilterTipoUsuarioPipe implements PipeTransform {
  transform(tipoUsuarios:TipoUsuario[], searchTerm: string):TipoUsuario[] {
    if (!tipoUsuarios || !searchTerm) {
      return tipoUsuarios;
    }
    return tipoUsuarios.filter(tipoUsuario =>
      tipoUsuario.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tipoUsuario.identifier.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
} 