import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Incidencias } from 'app/models/Incidencias';
import { IncidenciasService } from 'app/services/incidenciasservice';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CasasService } from 'app/services/casasservice';
import { Casas } from 'app/models/Casas';
import { Usuarios } from 'app/models/Usuarios';
import { UsuariosService } from 'app/services/usuariosservice';

declare var $: any;

@Component({
  selector: 'app-incidencias-create',
  templateUrl: './incidencias-create.component.html',
  styleUrls: ['./incidencias-create.component.scss']
})
export class IncidenciasCreateComponent implements OnInit {
  formIncidencias: FormGroup;
  Casas: Casas[] = [];
  usuarios: Usuarios[] = [];

  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private incidenciasService: IncidenciasService,
    private casasService: CasasService,
    private usuariosService: UsuariosService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.formIncidencias = this.fb.group({
      id: [0],
      descripcion: ['', Validators.required],
      estado: ['', Validators.required],
      tipo: ['', Validators.required],
      usuarioId: [0, Validators.required],
      casaId: [0, Validators.required],
      createdBy: ['']    
    });
  }

  ngOnInit(): void { 
    this.getUsuarios();
    this.getCasas();   
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.loadIncidencias(id);
      }
    });
  }

  getCasas(): void {
    this.casasService.getCasas()
      .subscribe((data: Casas[]) => {      
        this.Casas = data;
      });
  }

  getUsuarios(): void {
    this.usuariosService.getUsuarios()
      .subscribe((data: Usuarios[]) => {      
        this.usuarios = data;
      });
  }

  loadIncidencias(id: number): void {
    this.incidenciasService.getByIdIncidencias(id).subscribe((incidencias: Incidencias) => {                
      this.formIncidencias.patchValue(incidencias);
    });
  }

  save(): void {
    if (this.isEditMode) {
      this.updateIncidencias();
    } else {
      this.CreateIncidencias();
    }
  }

  CreateIncidencias(): void {
    const incidencias = this.formIncidencias.value;
    this.incidenciasService.createIncidencias(incidencias)
      .subscribe(response => {
        $.notify({
          icon: "Creacion",
          message: `Incidencia creada con éxito.`
        }, {
          type: 'success',
          timer: 4000,
          placement: {
            from: "bottom",
            align: "right"
          }
        });
        
        this.router.navigate(['incidencias']);
      });
  }

  updateIncidencias(): void {
    const incidencias = this.formIncidencias.value;
    this.incidenciasService.updateIncidencias(incidencias)
      .subscribe(response => {
        $.notify({
          icon: "Edición",
          message: `Incidencia actualizada con éxito.`
        }, {
          type: 'success',
          timer: 4000,
          placement: {
            from: "bottom",
            align: "right"
          }
        });

        this.router.navigate(['incidencias']);
      });
  }

  cancelar(): void {
    this.router.navigate(['incidencias']);
  }

  get descripcion() {
    return this.formIncidencias.get('descripcion') as FormControl;
  }
  get estado() {
    return this.formIncidencias.get('estado') as FormControl;
  }
  get tipo() {
    return this.formIncidencias.get('tipo') as FormControl;
  }
  get usuarioId() {
    return this.formIncidencias.get('usuarioId') as FormControl;
  }
  get casaId() {
    return this.formIncidencias.get('casaId') as FormControl;
  }
  get createdBy() {
    return this.formIncidencias.get('createdBy') as FormControl;
  }
}
