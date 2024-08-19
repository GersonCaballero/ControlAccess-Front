import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Residencial } from 'app/models/Residencial';
import { ResidencialService } from 'app/services/residencialservice';
declare var $: any;

@Component({
  selector: 'app-residencial-list',
  templateUrl: './residencial-list.component.html',
  styleUrls: ['./residencial-list.component.scss']
})
export class ResidencialListComponent implements OnInit {

  residenciales: Residencial[] = [];
  searchText: string = '';
  residencialSeleccionado: Residencial | null = null;
  mostrarModal: boolean = false;
  showSearchField: boolean = false;

  constructor(private residencialService: ResidencialService, private router: Router) { }

  ngOnInit(): void {
    this.getResidenciales();
  }

  getResidenciales(): void {
    this.residencialService.getResidencials()
      .subscribe((data: Residencial[]) => {
        this.residenciales = data;
      });
  }



  createComponent(): void {
    this.router.navigate(['residencials/create']);
  }

  edit(residencial: Residencial): void {
    this.router.navigate([`residencials/edit/${residencial.id}`]);
  }

  delete(residencial: Residencial): void {
    if (residencial) {
      this.residencialService.deleteByIdResidencial(residencial.id)
        .subscribe(() => {
          this.getResidenciales();
          $.notify({
            icon: "Eliminar",
            message: `El registro ${residencial.name} fue eliminado con éxito.`
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

  
  residencialFilter(): void {
    if (this.searchText.trim() === '') {
      this.getResidenciales();
    } else {
      const term = this.searchText.toLowerCase();
      this.residenciales = this.residenciales.filter(residencial =>
        residencial.name.toLowerCase().includes(term) ||
        residencial.address.toLowerCase().includes(term)
      );    
    }
  }

  openModalDelete(residencial: Residencial): void {
    this.residencialSeleccionado = residencial;
    this.mostrarModal = true;
  }

  closeModalDelete(): void {
    this.residencialSeleccionado = null;
  }

  showSearch(): void {
    this.showSearchField = !this.showSearchField;
    if (!this.showSearchField) {
      this.searchText = ''; 
      this.residencialFilter();
    }
  }
  
}
