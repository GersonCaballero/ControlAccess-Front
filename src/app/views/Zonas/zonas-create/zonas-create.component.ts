import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Zonas } from 'app/models/Zonas';
import { ZonasService } from 'app/services/zonasservice';
import { Residencial } from 'app/models/Residencial';
import { ResidencialService } from 'app/services/residencialservice';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-zonas-create',
  templateUrl: './zonas-create.component.html',
  styleUrls: ['./zonas-create.component.scss']
})
export class ZonasCreateComponent implements OnInit {

  Residencial: Residencial[] = [];
  formZonas: FormGroup;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private zonasService: ZonasService,
    private residencialService: ResidencialService,
    private router: Router,
    private route: ActivatedRoute
  ) { 

    this.formZonas = this.fb.group ({
      id: [0],
      name: ['', Validators.required],
      residencialId: [0, Validators.required],
      createdBy: [''],
      createdDate: ['', Validators.required],
      updatedBy: [''],
      updatedDate: ['', Validators.required],
    });
  }



  ngOnInit(): void {
    this.getResidencial();
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.loadZonas(id);
      }
    });
  }
  getResidencial(): void {
    this.residencialService.getResidencials().subscribe((data: Residencial[]) => {
      this.Residencial = data;
    });
  }

  loadZonas(id: number): void {
    this.zonasService.getByIdzonas(id).subscribe((zonas: Zonas) => {
      this.formZonas.patchValue(zonas);
    });
  }


  save(): void {
    if (this.isEditMode) {
      this.updateZonas();
    } else {
      this.createZonas();
    }
  }

  createZonas(): void {
    const zonas = this.formZonas.value;
    this.zonasService.createZonas(zonas)
      .subscribe(response => {
        $.notify({
          icon: "Creacion",
          message: `Zonas creada con éxito.`
        }, {
          type: 'success',
          timer: 4000,
          placement: {
            from: "bottom",
            align: "right"
          }
        });

        this.router.navigate(['zonas']);
      });
  }

  updateZonas(): void {
    const zonas = this.formZonas.value;
    this.zonasService.updateZonas(zonas)
      .subscribe(response => {
        $.notify({
          icon: "Edición",
          message: `Zonas actualizada con éxito.`
        }, {
          type: 'success',
          timer: 4000,
          placement: {
            from: "bottom",
            align: "right"
          }
        });

        this.router.navigate(['zonas']);
      });
  }

  cancelar () {
    this.router.navigate(['zonas'])
  }


  get Nombre() {
    return this.formZonas.get('name');
  }
  get ResidencialId() {
    return this.formZonas.get('residencialId');
  }
  get CreatedBy() {
    return this.formZonas.get('createdBy');
  }
  get CreatedDate() {
    return this.formZonas.get('createdDate');
  }
  get UpdatedBy() {
    return this.formZonas.get('updatedBy');
  }
  get UpdatedDate() {
    return this.formZonas.get('updatedDate');
  }


}
