import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Casas } from 'app/models/Casas';
import { CasasService } from 'app/services/casasservice';
import { Zonas } from 'app/models/Zonas';
import { ZonasService } from 'app/services/zonasservice';
import { Bloques } from 'app/models/Bloques';
import { BloquesService } from 'app/services/bloquesservice';
import { Calles } from 'app/models/Calles';
import { CallesService } from 'app/services/callesservice';
import { Avenidas } from 'app/models/Avenidas';
import { AvenidasService } from 'app/services/avenidasservice';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-casas-create',
  templateUrl: './casas-create.component.html',
  styleUrls: ['./casas-create.component.scss']
})
export class CasasCreateComponent implements OnInit {
  formCasas: FormGroup;
  zonas: Zonas[] = [];
  bloques: Bloques[] = [];
  calles: Calles[] = [];
  avenidas: Avenidas[] = [];
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private casasService: CasasService,
    private zonasService: ZonasService,
    private bloquesService: BloquesService,
    private callesService: CallesService,
    private avenidasService: AvenidasService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.formCasas = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      idZona: [0, Validators.required],
      idBloque: [0, Validators.required],
      idCalle: [0, Validators.required],
      idAvenida: [0, Validators.required],
      createdBy: ['', Validators.required],
      createdDate: ['', Validators.required],
      updatedBy: ['', Validators.required],
      updatedDate: ['', Validators.required]
    });
      
  }

  ngOnInit(): void {
    this.getZonas();
    this.getBloques();
    this.getCalles();
    this.getAvenidas();
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.loadCasas(id);
      }
    });
  }

  getZonas(): void {
    this.zonasService.getZonas().subscribe((data: Zonas[]) => {
      this.zonas = data;
    });
  }
  getBloques(): void {
    this.bloquesService.getBloque().subscribe((data: Bloques[]) => {
      this.bloques = data;
    });
  }
  getCalles(): void {
    this.callesService.getCalles().subscribe((data: Calles[]) => {
      this.calles = data;
    });
  }
  getAvenidas(): void {
    this.avenidasService.getAvenidas().subscribe((data: Avenidas[]) => {
      this.avenidas = data;
    });
  }

  loadCasas(id: number): void {
    this.casasService.getByIdCasas(id).subscribe((casas: Casas) => {
      this.formCasas.patchValue(casas);
    });
  }


  save(): void {
    if (this.isEditMode) {
      this.updateCasas();
    } else {
      this.createCasas();
    }
  }

  createCasas(): void {
    const casas = this.formCasas.value;
    this.casasService.createCasas(casas)
      .subscribe(response => {
        $.notify({
          icon: "Creacion",
          message: `Casas creada con éxito.`
        }, {
          type: 'success',
          timer: 4000,
          placement: {
            from: "bottom",
            align: "right"
          }
        });

        this.router.navigate(['casas']);
      });
  }

  updateCasas(): void {
    const casas = this.formCasas.value;
    this.casasService.updateCasas(casas)
      .subscribe(response => {
        $.notify({
          icon: "Edición",
          message: `Casas actualizada con éxito.`
        }, {
          type: 'success',
          timer: 4000,
          placement: {
            from: "bottom",
            align: "right"
          }
        });

        this.router.navigate(['casas']);
      });
  }

  cancelar() {
    this.router.navigate(['casas'])
  }

  get Nombre() {
    return this.formCasas.get('name');
  }
  get IdZona() {
    return this.formCasas.get('idZona');
  }
  get IdBloque() {
    return this.formCasas.get('idBloque');
  }
  get IdCalle() {
    return this.formCasas.get('idCalle');
  }
  get IdAvenida() {
    return this.formCasas.get('idAvenida');
  }
  get CreatedBy() {
    return this.formCasas.get('createdBy');
  }
  get CreatedDate() {
    return this.formCasas.get('createdDate');
  }
  get UpdatedBy() {
    return this.formCasas.get('updatedBy');
  }
  get UpdatedDate() {
    return this.formCasas.get('updatedDate');
  }



}
