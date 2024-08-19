import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Visitantes } from 'app/models/Visitantes';
import { VisitantesService } from 'app/services/visitantes';
// import { FilterVisitantesPipe } from 'app/views/search/Pipe/filter-visitantes.pipe';
declare var $: any;

@Component({
  selector: 'app-visitantes-list',
  templateUrl: './visitantes-list.component.html',
  styleUrls: ['./visitantes-list.component.scss']
})
export class VisitantesListComponent implements OnInit {
  visitantes: Visitantes[] = [];
  visitantesSeleccionado: Visitantes | null = null;
  mostrarModal: boolean = false;
  searchTerm: string = '';
  showSearchField: boolean = false;

  constructor(
    private visitantesService: VisitantesService, 
    private router: Router) { }

  ngOnInit(): void {
    this.getVisitantes();
  }

  getVisitantes(): void {
    this.visitantesService.getVisitantes()
      .subscribe((data: Visitantes[]) => {      
        this.visitantes = data 
      });
  }

  createComponent(): void {
    this.router.navigate(['visitantes/create']);
  }

  edit(visitantes: Visitantes): void {
    this.router.navigate([`visitantes/edit/${visitantes.id}`]);
  }

  delete(visitantes: Visitantes): void {
    if (visitantes) {
      this.visitantesService.deleteByIdVisitantes(visitantes.id)
        .subscribe((data: any) => {
          console.log('Visitantes eliminado:', visitantes);
          this.getVisitantes();
          $.notify({
            icon: "Eliminar",
            message: `El registro ${visitantes.nombre} fue eliminado con exito.`
    
        },{
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

  openModalDelete(visitantes: Visitantes): void {
    this.visitantesSeleccionado = visitantes;
    this.mostrarModal = true;
  }

  closeModalDelete(): void {
    this.visitantesSeleccionado = null;
  }
}