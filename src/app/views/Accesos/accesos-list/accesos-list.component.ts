import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accesos } from 'app/models/Accesos';
import { AccesosService } from 'app/services/accesosservice';
declare var $: any;

@Component({
  selector: 'app-accesos-list',
  templateUrl: './accesos-list.component.html',
  styleUrls: ['./accesos-list.component.scss']
})
export class AccesosListComponent implements OnInit {
  accesos: Accesos[] = [];
  accesoSeleccionado: Accesos | null = null;
  mostrarModal: boolean = false;
  searchTerm: string = '';
  showSearchField: boolean = false;

  constructor(
    private accesosservice: AccesosService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAccesos();
  }

  getAccesos(): void {
    this.accesosservice.getAccesos()
      .subscribe((data: Accesos[]) => {      
        this.accesos = data;
      });
  }

  createComponent(): void {
    this.router.navigate(['accesos/create']);
  }

  edit(acceso: Accesos): void {
    this.router.navigate([`accesos/edit/${acceso.id}`]);
  }

  delete(acceso: Accesos): void {
    if (acceso) {
      this.accesosservice.deleteByIdAccesos(acceso.id)
        .subscribe((data: any) => {
          console.log('Acceso eliminado:', acceso);
          this.getAccesos();
          $.notify({
            icon: "Eliminar",
            message: `El acceso con ID ${acceso.id} fue eliminado con éxito.`
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

  openModalDelete(acceso: Accesos): void {
    this.accesoSeleccionado = acceso;
    this.mostrarModal = true;
  }

  closeModalDelete(): void {
    this.accesoSeleccionado = null;
    this.mostrarModal = false;
  }
}
