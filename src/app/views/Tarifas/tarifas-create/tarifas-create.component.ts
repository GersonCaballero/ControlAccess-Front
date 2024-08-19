import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Tarifas } from 'app/models/Tarifas';
import { TarifasService } from 'app/services/tarifasservice';
import { Inmuebles } from 'app/models/Inmuebles';
import { InmueblesService } from 'app/services/inmueblesservice';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-tarifas-create',
  templateUrl: './tarifas-create.component.html',
  styleUrls: ['./tarifas-create.component.scss']
})
export class TarifasCreateComponent implements OnInit {

  inmuebles: Inmuebles[] = [];
  formTarifas: FormGroup;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private tarifasService: TarifasService,
    private inmueblesService: InmueblesService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.formTarifas = this.fb.group({
      id: [0],
      idTipoInmueble: [0],
      monto: [0.00, Validators.required],      
      createdBy: ['', Validators.required],
      createdDate: [Date.now(), Validators.required],
      updatedBy: ['', Validators.required],
      updatedDate: [Date.now(), Validators.required]
    })

  }

  ngOnInit(): void {
    this.getInmuebles();
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.loadTarifas(id);
      }
    });
  }

  getInmuebles(): void {
    this.inmueblesService.getInmuebles()
      .subscribe((data: Inmuebles[]) => {
        this.inmuebles = data;
      });
  }

  loadTarifas(id: number): void {
    this.tarifasService.getByIdTarifas(id).subscribe((tarifas: Tarifas) => {
      this.formTarifas.patchValue(tarifas);
    });
  }


  save(): void {
    if (this.isEditMode) {
      this.updateTarifas();
    } else {
      this.createTarifas();
    }
  }

  createTarifas(): void {
    const tarifas = this.formTarifas.value;
    this.tarifasService.createTarifas(tarifas)
      .subscribe(response => {
        $.notify({
          icon: "Creacion",
          message: `Tarifas creada con éxito.`
        }, {
          type: 'success',
          timer: 4000,
          placement: {
            from: "bottom",
            align: "right"
          }
        });

        this.router.navigate(['tarifas']);
      });
  }

  updateTarifas(): void {
    const tarifas = this.formTarifas.value;
    this.tarifasService.updateTarifas(tarifas)
      .subscribe(response => {
        $.notify({
          icon: "Edición",
          message: `Tarifas actualizada con éxito.`
        }, {
          type: 'success',
          timer: 4000,
          placement: {
            from: "bottom",
            align: "right"
          }
        });

        this.router.navigate(['tarifas']);
      });
  }
  cancelar(){
    this.router.navigate(['tarifas'])
  }

  get IdTipoInmueble() {
    return this.formTarifas.get('idTipoInmueble');
  }
  get Monto() {
    return this.formTarifas.get('monto');
  }
  get CreatedBy() {
    return this.formTarifas.get('createdBy');
  }
  get CreatedDate() {
    return this.formTarifas.get('createdDate');
  }
  get UpdatedBy() {
    return this.formTarifas.get('updatedBy');
  }
  get UpdatedDate() {
    return this.formTarifas.get('updatedDate');
  }

}
