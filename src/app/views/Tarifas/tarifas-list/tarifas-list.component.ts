import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarifas } from 'app/models/Tarifas';
import { TarifasService } from 'app/services/tarifasservice';
declare var $: any;

@Component({
  selector: 'app-tarifas-list',
  templateUrl: './tarifas-list.component.html',
  styleUrls: ['./tarifas-list.component.scss']
})
export class TarifasListComponent implements OnInit {

  tarifas: Tarifas[] = [];
  tarifasSeleccionado: Tarifas | null = null;
  mostrarModal: boolean = false;
  searchTerm: string = '';
  showSearchField: boolean = false;

  constructor(private tarifasService: TarifasService, private router: Router) { }

  ngOnInit(): void {
    this.getTarifas();
  }

  getTarifas(): void {
    this.tarifasService.getTarifas()
      .subscribe((data: Tarifas[]) => { 
        this.tarifas = data 
      });
  }

  createComponent(): void {
    this.router.navigate(['tarifas/create']);
  }

  edit(tarifas: Tarifas): void {
    this.router.navigate([`tarifas/edit/${tarifas.id}`]);
  }

  delete(tarifas: Tarifas): void {
    if (tarifas) {
      this.tarifasService.deleteByIdTarifas(tarifas.id)
        .subscribe((data: any) => {
          console.log('Tarifas eliminado:', tarifas);
          this.getTarifas();
          $.notify({
            icon: "Eliminar",
            message: `El registro ${tarifas.id} fue eliminado con exito.`
    
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

  openModalDelete(tarifas: Tarifas): void {
    this.tarifasSeleccionado = tarifas;
    this.mostrarModal = true;
  }

  closeModalDelete(): void {
    this.tarifasSeleccionado = null;
  }


}
