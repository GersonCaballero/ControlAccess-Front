import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsuariosService } from 'app/services/usuariosservice';
import { VisitantesService } from 'app/services/visitantes';
import { VehiculosService } from 'app/services/vehiculosservice';
import { CasasService } from 'app/services/casasservice';
import { AccesosService } from 'app/services/accesosservice';
import { Usuarios } from 'app/models/Usuarios';
import { Visitantes } from 'app/models/Visitantes';
import { vehiculos } from 'app/models/Vehiciulos';
import { Casas } from 'app/models/Casas';
import { Vehiculos } from 'app/models/Vehiculos';

declare var $: any;

@Component({
  selector: 'app-accesos-create',
  templateUrl: './accesos-create.component.html',
  styleUrls: ['./accesos-create.component.scss']
})
export class AccesosCreateComponent implements OnInit {
  formAccesos: FormGroup;
  usuarios: Usuarios[] = [];
  visitantes: Visitantes[] = [];
  vehiculos: Vehiculos[] = [];
  casas: Casas[] = [];
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private usuariosService: UsuariosService,
    private visitantesService: VisitantesService,
    private vehiculosService: VehiculosService,
    private casasService: CasasService,
    private accesosService: AccesosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formAccesos = this.fb.group({
      id: [0],
      usuarioId: [0, Validators.required],
      visitanteId: [0, Validators.required],
      tipoAcceso: ['', Validators.required],
      vehiculoId: [0, Validators.required],
      casaId: [0, Validators.required],
      createdBy: ['']
    });
  }

  ngOnInit(): void {
    this.getUsuarios();
    this.getVisitantes();
    this.getVehiculos();
    this.getCasas();
    
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.loadAcceso(id);
      }
    });
  }

  getUsuarios(): void {
    this.usuariosService.getUsuarios().subscribe((data: Usuarios[]) => {
      this.usuarios = data;
    });
  }

  getVisitantes(): void {
    this.visitantesService.getVisitantes().subscribe((data: Visitantes[]) => {
      this.visitantes = data;
    });
  }

  getVehiculos(): void {
    this.vehiculosService.getVehiculos().subscribe((data: Vehiculos[]) => {
      this.vehiculos = data;
    });
  }

  getCasas(): void {
    this.casasService.getCasas().subscribe((data: Casas[]) => {
      this.casas = data;
    });
  }

  loadAcceso(id: number): void {
    this.accesosService.getByIdAccesos(id).subscribe((acceso) => {
      this.formAccesos.patchValue(acceso);
    });
  }

  save(): void {
    if (this.isEditMode) {
      this.updateAcceso();
    } else {
      this.createAcceso();
    }
  }

  createAcceso(): void {
    const acceso = this.formAccesos.value;
    this.accesosService.createAccesos(acceso).subscribe(() => {
      $.notify({
        icon: "Creación",
        message: `Acceso creado con éxito.`
      }, {
        type: 'success',
        timer: 4000,
        placement: {
          from: "bottom",
          align: "right"
        }
      });

      this.router.navigate(['accesos']);
    });
  }

  updateAcceso(): void {
    const acceso = this.formAccesos.value;
    this.accesosService.updateAccesos(acceso).subscribe(() => {
      $.notify({
        icon: "Edición",
        message: `Acceso actualizado con éxito.`
      }, {
        type: 'success',
        timer: 4000,
        placement: {
          from: "bottom",
          align: "right"
        }
      });

      this.router.navigate(['accesos']);
    });
  }

  cancelar(): void {
    this.router.navigate(['accesos']);
  }

  get usuarioId() {
    return this.formAccesos.get('usuarioId') as FormControl;
  }
  get visitanteId() {
    return this.formAccesos.get('visitanteId') as FormControl;
  }
  get tipoAcceso() {
    return this.formAccesos.get('tipoAcceso') as FormControl;
  }
  get vehiculoId() {
    return this.formAccesos.get('vehiculoId') as FormControl;
  }
  get casaId() {
    return this.formAccesos.get('casaId') as FormControl;
  }
  get createdBy() {
    return this.formAccesos.get('createdBy') as FormControl;
  }
}
