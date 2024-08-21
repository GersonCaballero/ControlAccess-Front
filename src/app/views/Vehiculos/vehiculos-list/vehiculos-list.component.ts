import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculos } from 'app/models/Vehiculos';
import { VehiculosService } from 'app/services/vehiculosservice';
declare var $: any;

@Component({
  selector: 'app-vehiculos-list',
  templateUrl: './vehiculos-list.component.html',
  styleUrls: ['./vehiculos-list.component.scss']
})
export class VehiculosListComponent implements OnInit {
  vehiculos: Vehiculos[] = [];
  vehiculoSeleccionado: Vehiculos | null = null;
  mostrarModal: boolean = false;
  searchTerm: string = '';
  showSearchField: boolean = false;

  constructor(
    private vehiculosService: VehiculosService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getVehiculos();
  }

  getVehiculos(): void {
    this.vehiculosService.getVehiculos()
      .subscribe((data: Vehiculos[]) => {      
        this.vehiculos = data;
      });
  }

  createComponent(): void {
    this.router.navigate(['vehiculos/create']);
  }

  edit(vehiculos: Vehiculos): void {
    this.router.navigate([`vehiculos/edit/${vehiculos.id}`]);
  }

  delete(vehiculos: Vehiculos): void {
    if (vehiculos) {
      this.vehiculosService.deleteByIdVehiculos(vehiculos.id)
        .subscribe((data: any) => {
          console.log('Vehículo eliminado:', vehiculos);
          this.getVehiculos();
          $.notify({
            icon: "Eliminar",
            message: `El vehículo con placa ${vehiculos.placa} fue eliminado con éxito.`
          }, {
            type: 'danger',
            timer: 4000,
            placement: {
                from: "bottom",
                align: "right"
            }
          });
        });
    }
  }

  showSearch(): void {
    this.showSearchField = !this.showSearchField;    
  }

  openModalDelete(vehiculos: Vehiculos): void {
    this.vehiculoSeleccionado = vehiculos;
    this.mostrarModal = true;
  }

  closeModalDelete(): void {
    this.vehiculoSeleccionado = null;
    this.mostrarModal = false;
  }
}
