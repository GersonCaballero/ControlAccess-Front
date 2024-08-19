import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Zonas } from 'app/models/Zonas';
import { ZonasService } from 'app/services/zonasservice';
declare var $: any;

@Component({
  selector: 'app-zonas-list',
  templateUrl: './zonas-list.component.html',
  styleUrls: ['./zonas-list.component.scss']
})
export class ZonasListComponent implements OnInit {

  zonas: Zonas[] = [];
  zonasSeleccionado: Zonas | null = null;
  mostrarModal: boolean = false;
  searchTerm: string = '';
  showSearchField: boolean = false;

  constructor(private zonasService: ZonasService, private router: Router) { }

  ngOnInit(): void {
    this.getZonas();
  }

  getZonas(): void {
    this.zonasService.getZonas()
      .subscribe((data: Zonas[]) => { 
        this.zonas = data 
      });
  }

  createComponent(): void {
    this.router.navigate(['zonas/create']);
  }

  edit(zonas: Zonas): void {
    this.router.navigate([`zonas/edit/${zonas.id}`]);
  }

  delete(zonas: Zonas): void {
    if (zonas) {
      this.zonasService.deleteByIdzonas(zonas.id)
        .subscribe((data: any) => {
          console.log('zonas eliminado:', zonas);
          this.getZonas();
          $.notify({
            icon: "Eliminar",
            message: `El registro ${zonas.name} fue eliminado con exito.`
    
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

  openModalDelete(zonas: Zonas): void {
    this.zonasSeleccionado = zonas;
    this.mostrarModal = true;
  }

  closeModalDelete(): void {
    this.zonasSeleccionado = null;
  }

}
