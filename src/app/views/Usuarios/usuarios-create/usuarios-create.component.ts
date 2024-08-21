import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuarios } from 'app/models/Usuarios';
import { UsuariosService } from 'app/services/usuariosservice';
import { TipoUsuario } from 'app/models/TipoUsuario';
import { TipoUsuarioService } from 'app/services/tipousuarioservice';
import { Casas } from 'app/models/Casas';
import { CasasService } from 'app/services/casasservice';
import { Inmuebles } from 'app/models/Inmuebles';
import { InmueblesService } from 'app/services/inmueblesservice';

declare var $: any;

@Component({
  selector: 'app-usuarios-create',
  templateUrl: './usuarios-create.component.html',
  styleUrls: ['./usuarios-create.component.scss']
})
export class UsuariosCreateComponent implements OnInit {
  tiposUsuarios: TipoUsuario[] = [];
  casas: Casas[] = [];
  inmuebles: Inmuebles[] = [];
  formUsuarios: FormGroup;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private usuariosService: UsuariosService,
    private tipoUsuarioService: TipoUsuarioService,
    private casasService: CasasService,
    private inmueblesService: InmueblesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formUsuarios = this.fb.group({
      id: [0],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      numeroCelular: ['', Validators.required],
      nombreUsuario: ['', Validators.required],
      contrasena: ['', Validators.required],
      idTipoDeUsuario: [0, Validators.required],
      idCasa: [0, Validators.required],
      idInmueble: [0, Validators.required],
      createdBy: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getTipoUsarios();
    this.getCasas();
    this.getInmuebles();
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.loadUsuarios(id);
      }
    });
  }

  getTipoUsarios(): void {
    this.tipoUsuarioService.getTipoUsuario().subscribe((data: TipoUsuario[]) => {
      this.tiposUsuarios = data;
    });
  }

  getCasas(): void {
    this.casasService.getCasas().subscribe((data: Casas[]) => {
      this.casas = data;
    });
  }

  getInmuebles(): void {
    this.inmueblesService.getInmuebles().subscribe((data: Inmuebles[]) => {
      this.inmuebles = data;
    });
  }

  loadUsuarios(id: number): void {
    this.usuariosService.getByIdUsuarios(id).subscribe((usuarios: Usuarios) => {
      this.formUsuarios.patchValue(usuarios);
    });
  }

  save(): void {
    if (this.formUsuarios.valid) {
      if (this.isEditMode) {
        this.updateUsuarios();
      } else {
        this.createUsuarios();
      }
    }
  }

  createUsuarios(): void {
    const usuarios = this.formUsuarios.value;
    this.usuariosService.createUsuarios(usuarios)
      .subscribe(response => {
        $.notify({
          icon: "Creacion",
          message: `Usuario creado con éxito.`
        }, {
          type: 'success',
          timer: 4000,
          placement: {
            from: "bottom",
            align: "right"
          }
        });

        this.router.navigate(['usuarios']);
      });
  }

  updateUsuarios(): void {
    const usuarios = this.formUsuarios.value;
    this.usuariosService.updateUsuarios(usuarios)
      .subscribe(response => {
        $.notify({
          icon: "Edición",
          message: `Usuario actualizado con éxito.`
        }, {
          type: 'success',
          timer: 4000,
          placement: {
            from: "bottom",
            align: "right"
          }
        });

        this.router.navigate(['usuarios']);
      });
  }

  cancelar(){
    this.router.navigate(['usuarios'])
  }

  get nombre() {
    return this.formUsuarios.get('nombre');
  }

  get apellido() {
    return this.formUsuarios.get('apellido');
  }

  get correoElectronico() {
    return this.formUsuarios.get('correoElectronico');
  }

  get numeroCelular() {
    return this.formUsuarios.get('numeroCelular');
  }

  get nombreUsuario() {
    return this.formUsuarios.get('nombreUsuario');
  }

  get contrasena() {
    return this.formUsuarios.get('contrasena');
  }

  get idTipoDeUsuario() {
    return this.formUsuarios.get('idTipoDeUsuario');
  }

  get idCasa() {
    return this.formUsuarios.get('idCasa');
  }

  get idInmueble() {
    return this.formUsuarios.get('idInmueble');
  }

  get createdBy() {
    return this.formUsuarios.get('createdBy');
  }

  get createdDate() {
    return this.formUsuarios.get('createdDate');
  }

  get updatedBy() {
    return this.formUsuarios.get('updatedBy');
  }

  get updatedDate() {
    return this.formUsuarios.get('updatedDate');
  }
}
