import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Incidencias } from 'app/models/Incidencias';
import { IncidenciasService } from 'app/services/incidenciasservice';
declare var $: any;

@Component({
  selector: 'app-incidencias-list',
  templateUrl: './incidencias-list.component.html',
  styleUrls: ['./incidencias-list.component.scss']
})
export class IncidenciasListComponent implements OnInit {
  incidencias: Incidencias[] = [];
  incidenciaSeleccionada: Incidencias | null = null;
  mostrarModal: boolean = false;
  searchTerm: string = '';
  showSearchField: boolean = false;

  constructor(
    private incidenciasService: IncidenciasService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getIncidencias();
  }

  getIncidencias(): void {
    this.incidenciasService.getIncidencias()
      .subscribe((data: Incidencias[]) => {      
        this.incidencias = data;
      });
  }

  createComponent(): void {
    this.router.navigate(['incidencias/create']);
  }

  edit(incidencia: Incidencias): void {
    this.router.navigate([`incidencias/edit/${incidencia.id}`]);
  }

  delete(incidencia: Incidencias): void {
    if (incidencia) {
      this.incidenciasService.deleteByIdIncidencias(incidencia.id)
        .subscribe((data: any) => {
          console.log('Incidencia eliminada:', incidencia);
          this.getIncidencias();
          $.notify({
            icon: "Eliminar",
            message: `La incidencia ${incidencia.descripcion} fue eliminada con éxito.`
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

  openModalDelete(incidencia: Incidencias): void {
    this.incidenciaSeleccionada = incidencia;
    this.mostrarModal = true;
  }

  closeModalDelete(): void {
    this.incidenciaSeleccionada = null;
    this.mostrarModal = false;
  }
}
