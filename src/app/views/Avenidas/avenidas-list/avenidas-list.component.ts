import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Avenidas } from 'app/models/Avenidas';
import { AvenidasService } from 'app/services/avenidasservice';
declare var $: any;

@Component({
  selector: 'app-avenidas-list',
  templateUrl: './avenidas-list.component.html',
  styleUrls: ['./avenidas-list.component.scss']
})
export class AvenidasListComponent implements OnInit {
  avenidas: Avenidas[] = [];
  avenidasSeleccionado: Avenidas | null = null;
  mostrarModal: boolean = false;
  searchTerm: string = '';
  showSearchField: boolean = false;


  constructor(
    private avenidasService: AvenidasService, 
    private router: Router) { }

  ngOnInit(): void {
    this.getAvenidas();
  }

  getAvenidas(): void {
    this.avenidasService.getAvenidas()
      .subscribe((data: Avenidas[]) => {      
        this.avenidas = data 
      });
  }

 

  createComponent(): void {
    this.router.navigate(['avenidas/create']);
  }

  
  edit(avenidas: Avenidas): void {
    this.router.navigate([`avenidas/edit/${avenidas.id}`]);
  }

  delete(avenidas: Avenidas): void {
    if (avenidas) {
      this.avenidasService.deleteByIdAvenidas(avenidas.id)
        .subscribe((data: any) => {
          console.log('Avenidas eliminado:', avenidas);
          this.getAvenidas();
          $.notify({
            icon: "Eliminar",
            message: `El registro ${avenidas.name} fue eliminado con exito.`
    
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

  openModalDelete(avenidas: Avenidas): void {
    this.avenidasSeleccionado = avenidas;
    this.mostrarModal = true;
  }

  closeModalDelete(): void {
    this.avenidasSeleccionado = null;
  }

}
