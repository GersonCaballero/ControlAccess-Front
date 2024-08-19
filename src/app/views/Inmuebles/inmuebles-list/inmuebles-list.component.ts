import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inmuebles } from 'app/models/Inmuebles';
import { InmueblesService } from 'app/services/inmueblesservice';
declare var $: any;

@Component({
  selector: 'app-inmuebles-list',
  templateUrl: './inmuebles-list.component.html',
  styleUrls: ['./inmuebles-list.component.scss']
})
export class InmueblesListComponent implements OnInit {

  inmuebles: Inmuebles[] = [];
  inmueblesSeleccionado: Inmuebles | null = null;
  mostrarModal: boolean = false;
  searchTerm: string = '';
  showSearchField: boolean = false;

  constructor(private inmueblesService: InmueblesService, private router: Router) { }

  ngOnInit(): void {
    this.getInmuebles();
  }

  getInmuebles(): void {
    this.inmueblesService.getInmuebles()
      .subscribe((data: Inmuebles[]) => { 
        this.inmuebles = data 
      });
  }

  createComponent(): void {
    this.router.navigate(['inmuebles/create']);
  }

  edit(inmuebles: Inmuebles): void {
    this.router.navigate([`inmuebles/edit/${inmuebles.id}`]);
  }

  delete(inmuebles: Inmuebles): void {
    if (inmuebles) {
      this.inmueblesService.deleteByIdInmuebles(inmuebles.id)
        .subscribe((data: any) => {
          console.log('Inmuebles eliminado:', inmuebles);
          this.getInmuebles();
          $.notify({
            icon: "Eliminar",
            message: `El registro ${inmuebles.name} fue eliminado con exito.`
    
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

  openModalDelete(inmuebles: Inmuebles): void {
    this.inmueblesSeleccionado = inmuebles;
    this.mostrarModal = true;
  }

  closeModalDelete(): void {
    this.inmueblesSeleccionado = null;
  }


}
