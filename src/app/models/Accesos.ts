import { Usuarios } from './Usuarios';
import { Visitantes } from './Visitantes';
import { Vehiculos } from './Vehiculos';
import { Casas } from './Casas';
export interface Accesos {
  id: number;
  usuarioId: number;
  usuario?: Usuarios;
  visitanteId : number;
  visitante?: Visitantes;
  tipoAcceso : string;
  vehiculoId : number;
  vehiculo?: Vehiculos;
  casaId : number;
  casa?: Casas;
  createdBy : string;
};