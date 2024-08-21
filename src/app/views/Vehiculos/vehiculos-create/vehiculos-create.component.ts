import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Vehiculos } from 'app/models/Vehiculos';
import { VehiculosService } from 'app/services/vehiculosservice';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsuariosService } from 'app/services/usuariosservice';
import { Usuarios } from 'app/models/Usuarios';

declare var $: any;

@Component({
  selector: 'app-vehiculos-create',
  templateUrl: './vehiculos-create.component.html',
  styleUrls: ['./vehiculos-create.component.scss']
})
export class VehiculosCreateComponent implements OnInit {
  formVehiculos: FormGroup;
  usuarios: Usuarios[] = [];
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private vehiculosService: VehiculosService,
    private usuariosService: UsuariosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formVehiculos = this.fb.group({
      id: [0],
      placa: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      color: ['', Validators.required],
      usuarioId: [0, Validators.required],
      createdBy: ['']
    });
  }

  ngOnInit(): void { 
    this.getUsuarios();   
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.loadVehiculo(id);
      }
    });
  }

  getUsuarios(): void {
    this.usuariosService.getUsuarios()
      .subscribe((data: Usuarios[]) => {      
        this.usuarios = data;
      });
  }

  loadVehiculo(id: number): void {
    this.vehiculosService.getByIdVehiculos(id).subscribe((vehiculo: Vehiculos) => {                
      this.formVehiculos.patchValue(vehiculo);
    });
  }

  save(): void {
    if (this.isEditMode) {
      this.updateVehiculo();
    } else {
      this.createVehiculo();
    }
  }

  createVehiculo(): void {
    const vehiculo = this.formVehiculos.value;
    this.vehiculosService.createVehiculos(vehiculo)
      .subscribe(response => {
        $.notify({
          icon: "Creacion",
          message: `Vehículo creado con éxito.`
        }, {
          type: 'success',
          timer: 4000,
          placement: {
            from: "bottom",
            align: "right"
          }
        });

        this.router.navigate(['vehiculos']);
      });
  }

  updateVehiculo(): void {
    const vehiculo = this.formVehiculos.value;
    this.vehiculosService.updateVehiculos(vehiculo)
      .subscribe(response => {
        $.notify({
          icon: "Edición",
          message: `Vehículo actualizado con éxito.`
        }, {
          type: 'success',
          timer: 4000,
          placement: {
            from: "bottom",
            align: "right"
          }
        });

        this.router.navigate(['vehiculos']);
      });
  }

  cancelar(): void {
    this.router.navigate(['vehiculos']);
  }

  get placa() {
    return this.formVehiculos.get('placa') as FormControl;
  }
  get marca() {
    return this.formVehiculos.get('marca') as FormControl;
  }
  get modelo() {
    return this.formVehiculos.get('modelo') as FormControl;
  }
  get color() {
    return this.formVehiculos.get('color') as FormControl;
  }
  get usuarioId() {
    return this.formVehiculos.get('usuarioId') as FormControl;
  }
  get createdBy() {
    return this.formVehiculos.get('createdBy') as FormControl;
  }
}
