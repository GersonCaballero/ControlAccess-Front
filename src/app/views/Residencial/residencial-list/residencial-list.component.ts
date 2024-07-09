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
  residencialSeleccionado: Residencial | null = null;
  mostrarModal: boolean = false;

  constructor(private residencialService: ResidencialService, private router: Router) { }

  ngOnInit(): void {
    this.getResidenciales();
  }

  getResidenciales(): void {
    this.residencialService.getResidencials()
      .subscribe((data: Residencial[]) => { 
        this.residenciales = data 
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
        .subscribe((data: any) => {
          console.log('Residencial eliminado:', residencial);
          this.getResidenciales();
          $.notify({
            icon: "Eliminar",
            message: `El registro ${residencial.name} fue eliminado con exito.`
    
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

  openModalDelete(residencial: Residencial): void {
    this.residencialSeleccionado = residencial;
    this.mostrarModal = true;
  }

  closeModalDelete(): void {
    this.residencialSeleccionado = null;
  }
}
