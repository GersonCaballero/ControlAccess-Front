import { Pipe, PipeTransform } from '@angular/core';
import { Usuarios } from 'app/models/Usuarios';

@Pipe({
  name: 'filterUsuarios',
})
export class FilterUsuariosPipe implements PipeTransform {
  transform(usuarios:Usuarios[], searchTerm: string):Usuarios[] {
    if (!usuarios || !searchTerm) {
      return usuarios;
    }
    return usuarios.filter(usuario =>
      usuario.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      usuario.correoElectronico.toLowerCase().includes(searchTerm.toLowerCase()) ||
      usuario.numeroCelular.toLowerCase().includes(searchTerm.toLowerCase()) ||
      usuario.nombreUsuario.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}