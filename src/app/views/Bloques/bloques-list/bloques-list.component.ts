import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bloques } from 'app/models/Bloques';
import { BloquesService } from 'app/services/bloquesservice';
declare var $: any;

@Component({
  selector: 'app-bloques-list',
  templateUrl: './bloques-list.component.html',
  styleUrls: ['./bloques-list.component.scss']
})
export class BloquesListComponent implements OnInit {

  bloques: Bloques[] = [];
  bloquesSeleccionado: Bloques | null = null;
  mostrarModal: boolean = false;
  showSearchField: boolean = false;
  searchTerm: string = '';

  constructor(private bloquesService: BloquesService, private router: Router) { }

  ngOnInit(): void {
    this.getBloques();
  }

  getBloques(): void {
    this.bloquesService.getBloque()
      .subscribe((data: Bloques[]) => { 
        this.bloques = data 
      });
  }

  createComponent(): void {
    this.router.navigate(['bloques/create']);
  }

  edit(bloques: Bloques): void {
    this.router.navigate([`bloques/edit/${bloques.id}`]);
  }

  delete(bloques: Bloques): void {
    if (bloques) {
      this.bloquesService.deleteByIdBloques(bloques.id)
        .subscribe(() => {
          console.log('Bloques eliminado:', bloques);
          this.getBloques();
          $.notify({
            icon: "Eliminar",
            message: `El registro ${bloques.name} fue eliminado con éxito.`
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


  openModalDelete(bloques: Bloques): void {
    this.bloquesSeleccionado = bloques;
    this.mostrarModal = true;
  }

  closeModalDelete(): void {
    this.bloquesSeleccionado = null;
  }
}
