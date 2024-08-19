import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Calles } from 'app/models/Calles';
import { CallesService } from 'app/services/callesservice';
declare var $: any;

@Component({
  selector: 'app-calles-list',
  templateUrl: './calles-list.component.html',
  styleUrls: ['./calles-list.component.scss']
})
export class CallesListComponent implements OnInit {

  calles: Calles[] = [];
  callesSeleccionado: Calles | null = null;
  mostrarModal: boolean = false;
  searchTerm: string = '';
  showSearchField: boolean = false;

  constructor(private callesservice: CallesService, private router: Router) { }

  ngOnInit(): void {
    this.getCalles();
  }

  getCalles(): void {
    this.callesservice.getCalles()
      .subscribe((data: Calles[]) => { 
        this.calles = data 
      });
  }

  createComponent(): void {
    this.router.navigate(['calles/create']);
  }

  edit(calles: Calles): void {
    this.router.navigate([`calles/edit/${calles.id}`]);
  }

  delete(calles: Calles): void {
    if (calles) {
      this.callesservice.deleteByIdCalles(calles.id)
        .subscribe((data: any) => {
          console.log('calles eliminado:', calles);
          this.getCalles();
          $.notify({
            icon: "Eliminar",
            message: `El registro ${calles.name} fue eliminado con exito.`
    
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

  openModalDelete(calles: Calles): void {
    this.callesSeleccionado = calles;
    this.mostrarModal = true;
  }

  closeModalDelete(): void {
    this.callesSeleccionado = null;
  }

}
