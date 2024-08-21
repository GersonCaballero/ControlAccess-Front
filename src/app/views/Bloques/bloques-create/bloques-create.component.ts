import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Bloques } from 'app/models/Bloques';
import { BloquesService } from 'app/services/bloquesservice';
import { Residencial } from 'app/models/Residencial';
import { ResidencialService } from 'app/services/residencialservice';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-bloques-create',
  templateUrl: './bloques-create.component.html',
  styleUrls: ['./bloques-create.component.scss']
})
export class BloquesCreateComponent implements OnInit {
  formBloques: FormGroup;
  Residencial: Residencial[] = [];
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private bloquesService: BloquesService,
    private residencialService: ResidencialService,
    private router: Router,
    private route: ActivatedRoute
  ) {
      
    this.formBloques = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      residencialId: [0, Validators.required],  
      createdBy: ['']
    });
  }

  ngOnInit(): void {
    this.getResidencials();
    this.route.params.subscribe(params => {      
      const id = params['id'];
      if (id) {
        this.isEditMode = true;  
        this.loadBloques(id);
      }
    });
  }

  getResidencials(): void {
    this.residencialService.getResidencials()
    .subscribe((data: Residencial[]) => {
      this.Residencial = data;
    })
  }

  loadBloques(id: number): void {
    this.bloquesService.getByIdBloques(id).subscribe((bloques: Bloques) => {      
      this.formBloques.patchValue(bloques);
    });
  }


  save(): void {
    if (this.isEditMode) {
      this.updateBloques();
    } else {
      this.createBloques();
    }
  }

  createBloques(): void {
    const bloques = this.formBloques.value;
    this.bloquesService.createBloques(bloques)
      .subscribe(response => {
        $.notify({
          icon: "Creacion",
          message: `Bloques creada con éxito.`
        }, {
          type: 'success',
          timer: 4000,
          placement: {
            from: "bottom",
            align: "right"
          }
        });

        this.router.navigate(['bloques']);
      });
  }

  updateBloques(): void {
    const bloques = this.formBloques.value;
    this.bloquesService.updateBloques(bloques)
      .subscribe(response => {
        $.notify({
          icon: "Edición",
          message: `Avenidas actualizada con éxito.`
        }, {
          type: 'success',
          timer: 4000,
          placement: {
            from: "bottom",
            align: "right"
          }
        });

        this.router.navigate(['bloques']);
      });
  }

  Cancelar() {
    this.router.navigate(["bloques"])
  }

  get Nombre () {
    return this.formBloques.get('name') as FormControl;
  }
  get ResidencialId () {
    return this.formBloques.get('residencialId') as FormControl;
  }
  get createdBy () {
    return this.formBloques.get('createdBy') as FormControl;
  }
  get createdDate () {
    return this.formBloques.get('createdDate') as FormControl;
  }
  get updatedBy () {
    return this.formBloques.get('updatedBy') as FormControl;
  }
  get updatedDate () {
    return this.formBloques.get('updatedDate') as FormControl;
  }

}

