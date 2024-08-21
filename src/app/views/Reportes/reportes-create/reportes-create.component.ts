import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Reportes } from 'app/models/Reportes';
import { ReportesService } from 'app/services/reportesservice.service';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { get } from 'jquery';
import { Usuarios } from 'app/models/Usuarios';
import { UsuariosService } from 'app/services/usuariosservice';

declare var $: any;

@Component({
  selector: 'app-reportes-create',
  templateUrl: './reportes-create.component.html',
  styleUrls: ['./reportes-create.component.scss']
})
export class ReportesCreateComponent implements OnInit {
  formReportes: FormGroup;
  isEditMode: boolean = false;
  usuarios: Usuarios[] = [];

  constructor(
    private fb: FormBuilder,
    private reportesService: ReportesService,
    private usuariosService: UsuariosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formReportes = this.fb.group({
      id: [0],
      tipoReporte: ['', Validators.required],
      fechaHoraGeneracion: ['', Validators.required],
      contenido: ['', Validators.required],
      usuarioId: [0, Validators.required],
      createdBy: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getUsuarios();
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.loadReportes(id);
      }
    });
  }
  getUsuarios(): void {
    this.usuariosService.getUsuarios().subscribe((data: Usuarios[]) => {
      this.usuarios = data;
    });
  }


  loadReportes(id: number): void {
    this.reportesService.getByIdReportes(id).subscribe((reportes: Reportes) => {      
      this.formReportes.patchValue(reportes);
    });
  }

  save(): void {
    if (this.isEditMode) {
      this.updateReportes();
    } else {
      this.createReportes();
    }
  }

  createReportes(): void {
    const reportes = this.formReportes.value;
    this.reportesService.createReportes(reportes)
      .subscribe(response => {
        $.notify({
          icon: "Creacion",
          message: `Reporte creado con éxito.`
        }, {
          type: 'success',
          timer: 4000,
          placement: {
            from: "bottom",
            align: "right"
          }
        });

        this.router.navigate(['reportes']);
      });
  }

  updateReportes(): void {
    const reportes = this.formReportes.value;
    this.reportesService.updateReportes(reportes)
      .subscribe(response => {
        $.notify({
          icon: "Edición",
          message: `Reporte actualizado con éxito.`
        }, {
          type: 'success',
          timer: 4000,
          placement: {
            from: "bottom",
            align: "right"
          }
        });

        this.router.navigate(['reportes']);
      });
  }

  Cancelar() {
    this.router.navigate(['reportes']);
  }

  get tipoReporte() {
    return this.formReportes.get('tipoReporte') as FormControl;
  }
  get fechaHoraGeneracion() {
    return this.formReportes.get('fechaHoraGeneracion') as FormControl;
  }
  get contenido() {
    return this.formReportes.get('contenido') as FormControl;
  }
  get usuarioId() {
    return this.formReportes.get('usuarioId') as FormControl;
  }
  get createdBy() {
    return this.formReportes.get('createdBy') as FormControl;
  }
  get createdDate() {
    return this.formReportes.get('createdDate') as FormControl;
  }
  get updatedBy() {
    return this.formReportes.get('updatedBy') as FormControl;
  }
  get updatedDate() {
    return this.formReportes.get('updatedDate') as FormControl;
  }
}
