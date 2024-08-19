import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Casas } from 'app/models/Casas';
import { CasasService } from 'app/services/casasservice';
declare var $: any;


@Component({
  selector: 'app-casas-list',
  templateUrl: './casas-list.component.html',
  styleUrls: ['./casas-list.component.scss']
})
export class CasasListComponent implements OnInit {

  casas: Casas[] = [];
  casasSeleccionado: Casas | null = null;
  mostrarModal: boolean = false;
  searchTerm: string = '';
  showSearchField: boolean = false;

  constructor(private casasService: CasasService, private router: Router) { }

  ngOnInit(): void {
    this.getCasas();
  }

  getCasas(): void {
    this.casasService.getCasas()
      .subscribe((data: Casas[]) => { 
        this.casas = data 
      });
  }

  createComponent(): void {
    this.router.navigate(['casas/create']);
  }

  edit(casas: Casas): void {
    this.router.navigate([`casas/edit/${casas.id}`]);
  }

  delete(casas: Casas): void {
    if (casas) {
      this.casasService.deleteByIdCasas(casas.id)
        .subscribe((data: any) => {
          console.log('casas eliminado:', casas);
          this.getCasas();
          $.notify({
            icon: "Eliminar",
            message: `El registro ${casas.name} fue eliminado con exito.`
    
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
    this.searchTerm = '';
  }

  openModalDelete(casas: Casas): void {
    this.casasSeleccionado = casas;
    this.mostrarModal = true;
  }

  closeModalDelete(): void {
    this.casasSeleccionado = null;
  }

}
