import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { VisitantesService } from 'app/services/visitantes';
import { Visitantes } from 'app/models/Visitantes';

declare var $: any;

@Component({
  selector: 'app-visitantes-create',
  templateUrl: './visitantes-create.component.html',
  styleUrls: ['./visitantes-create.component.scss']
})
export class VisitantesCreateComponent implements OnInit {
  formVisitantes: FormGroup;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private visitantesService: VisitantesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formVisitantes = this.fb.group({
      id: [0],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      numeroIdentidad: ['', Validators.required],
      telefono: ['', Validators.required],
      motivo: ['', Validators.required],
      observaciones: [''],
      createdBy: [''],
      createdDate: ['', Validators.required],
      updatedBy: [''],
      updatedDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.loadVisitantes(id);
      }
    });
  }

  loadVisitantes(id: number): void {
    this.visitantesService.getByIdVisitantes(id).subscribe((visitante: Visitantes) => {
      this.formVisitantes.patchValue(visitante);
    });
  }

  save(): void {
    if (this.isEditMode) {
      this.updateVisitantes();
    } else {
      this.createVisitantes();
    }
  }

  createVisitantes(): void {
    const visitante = this.formVisitantes.value;
    this.visitantesService.createVisitantes(visitante).subscribe(response => {
      $.notify({
        icon: "Creacion",
        message: `Visitante creado con éxito.`
      }, {
        type: 'success',
        timer: 4000,
        placement: {
          from: "bottom",
          align: "right"
        }
      });

      this.router.navigate(['visitantes']);
    });
  }

  updateVisitantes(): void {
    const visitante = this.formVisitantes.value;
    this.visitantesService.updateVisitantes(visitante).subscribe(response => {
      $.notify({
        icon: "Edición",
        message: `Visitante actualizado con éxito.`
      }, {
        type: 'success',
        timer: 4000,
        placement: {
          from: "bottom",
          align: "right"
        }
      });

      this.router.navigate(['visitantes']);
    });
  }

  Cancelar() {
    this.router.navigate(['visitantes']);
  }

  get nombre() {
    return this.formVisitantes.get('nombre') as FormControl;
  }
  get apellido() {
    return this.formVisitantes.get('apellido') as FormControl;
  }
  get numeroIdentidad() {
    return this.formVisitantes.get('numeroIdentidad') as FormControl;
  }
  get telefono() {
    return this.formVisitantes.get('telefono') as FormControl;
  }
  get motivo() {
    return this.formVisitantes.get('motivo') as FormControl;
  }
  get observaciones() {
    return this.formVisitantes.get('observaciones') as FormControl;
  }
  get createdBy() {
    return this.formVisitantes.get('createdBy') as FormControl;
  }
  get createdDate() {
    return this.formVisitantes.get('createdDate') as FormControl;
  }
  get updatedBy() {
    return this.formVisitantes.get('updatedBy') as FormControl;
  }
  get updatedDate() {
    return this.formVisitantes.get('updatedDate') as FormControl;
  }
}