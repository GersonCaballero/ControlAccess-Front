import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoUsuario } from 'app/models/TipoUsuario';
import { TipoUsuarioService } from 'app/services/tipousuarioservice';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var $: any;
@Component({
  selector: 'app-tipo-usuario-create',
  templateUrl: './tipo-usuario-create.component.html',
  styleUrls: ['./tipo-usuario-create.component.scss']
})
export class TipoUsuarioCreateComponent implements OnInit {

  formTipoUsuario: FormGroup;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private tipoUsuarioService: TipoUsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formTipoUsuario = this.fb.group({
      id: [0],
      nombre: ['', Validators.required],
      identifier: ['', Validators.required],
      createdBy: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.loadTipoUsuario(id);
      }
    });
  }

  loadTipoUsuario(id: number): void {
    this.tipoUsuarioService.getByIdTipoUsuario(id).subscribe((tipousuario: TipoUsuario) => {
      this.formTipoUsuario.patchValue(tipousuario);
    });
  }

  save(): void {
    if (this.isEditMode) {
      this.updateTipoUsuario();
    } else {
      this.createTipoUsuario();
    }
  }

  createTipoUsuario(): void {
    this.tipoUsuarioService.createTipoUsuario(this.formTipoUsuario.value)
      .subscribe(response => {
        $.notify({
          icon: "Creacion",
          message: `TipoUsuario creado con éxito.`
        }, {
          type: 'success',
          timer: 4000,
          placement: {
            from: "bottom",
            align: "right"
          }
        });
        this.router.navigate(['tipousuarios']);
      });
  }

  updateTipoUsuario(): void {
    this.tipoUsuarioService.updateTipoUsuario(this.formTipoUsuario.value)
      .subscribe(response => {
        $.notify({
          icon: "Edición",
          message: `Tipo de usuario actualizado con éxito.`
        }, {
          type: 'success',
          timer: 4000,
          placement: {
            from: "bottom",
            align: "right"
          }
        });
        this.router.navigate(['tipousuarios']);
      });
  }

  cancelar() {
    this.router.navigate(['tipousuarios']);
  }

  get nombre() {
    return this.formTipoUsuario.get('nombre');
  }

  get identifier() {
    return this.formTipoUsuario.get('identifier');
  }

  get createdBy() {
    return this.formTipoUsuario.get('createdBy');
  }

}
