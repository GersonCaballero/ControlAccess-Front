import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoUsuario } from 'app/models/TipoUsuario';
import { TipoUsuarioService } from 'app/services/tipousuarioservice';
declare var $: any;

@Component({
  selector: 'app-tipo-usuario-list',
  templateUrl: './tipo-usuario-list.component.html',
  styleUrls: ['./tipo-usuario-list.component.scss']
})
export class TipoUsuarioListComponent implements OnInit {

  tipoUsuario: TipoUsuario[] = [];
  tipoUsuarioSeleccionado: TipoUsuario | null = null;
  mostrarModal: boolean = false;
  searchTerm: string = '';
  showSearchField: boolean = false;

  constructor(private tipoUsuarioService: TipoUsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.getTipoUsuario();
  }

  getTipoUsuario(): void {
    this.tipoUsuarioService.getTipoUsuario()
      .subscribe((data: TipoUsuario[]) => { 
        this.tipoUsuario = data 
      });
  }

  createComponent(): void {
    this.router.navigate(['tipousuarios/create']);
  }

  edit(tipoUsuario: TipoUsuario): void {
    this.router.navigate([`tipousuarios/edit/${tipoUsuario.id}`]);
  }

  delete(tipoUsuario: TipoUsuario): void {
    if (tipoUsuario) {
      this.tipoUsuarioService.deleteByIdTipoUsuario(tipoUsuario.id)
        .subscribe((data: any) => {
          console.log('TipoUsuario eliminado:', tipoUsuario);
          this.getTipoUsuario();
          $.notify({
            icon: "Eliminar",
            message: `El registro ${tipoUsuario.nombre} fue eliminado con exito.`
    
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

  openModalDelete(tipoUsuario: TipoUsuario): void {
    this.tipoUsuarioSeleccionado = tipoUsuario;
    this.mostrarModal = true;
  }

  closeModalDelete(): void {
    this.tipoUsuarioSeleccionado = null;
  }


}
