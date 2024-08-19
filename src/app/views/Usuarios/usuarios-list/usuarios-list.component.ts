import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'app/models/Usuarios';
import { UsuariosService } from 'app/services/usuariosservice';
declare var $: any;

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.scss']
})
export class UsuariosListComponent implements OnInit {

  usuarios: Usuarios[] = [];
  usuariosSeleccionado: Usuarios | null = null;
  mostrarModal: boolean = false;
  searchTerm: string = '';
  showSearchField: boolean = false;

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.usuariosService.getUsuarios()
      .subscribe((data: Usuarios[]) => { 
        this.usuarios = data 
      });
  }

  createComponent(): void {
    this.router.navigate(['usuarios/create']);
  }

  edit(usuarios: Usuarios): void {
    this.router.navigate([`usuarios/edit/${usuarios.id}`]);
  }

  delete(usuarios: Usuarios): void {
    if (usuarios) {
      this.usuariosService.deleteByIdUsuarios(usuarios.id)
        .subscribe((data: any) => {
          console.log('Usuarios eliminado:', usuarios);
          this.getUsuarios();
          $.notify({
            icon: "Eliminar",
            message: `El registro ${usuarios.nombre} fue eliminado con exito.`
    
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

  openModalDelete(usuarios: Usuarios): void {
    this.usuariosSeleccionado = usuarios;
    this.mostrarModal = true;
  }

  closeModalDelete(): void {
    this.usuariosSeleccionado = null;
  }

}
