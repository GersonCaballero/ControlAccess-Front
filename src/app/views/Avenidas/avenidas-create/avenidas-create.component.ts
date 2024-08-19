import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Avenidas } from 'app/models/Avenidas';
import { AvenidasService } from 'app/services/avenidasservice';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ResidencialService } from 'app/services/residencialservice';
import { Residencial } from 'app/models/Residencial';

declare var $: any;

@Component({
  selector: 'app-avenidas-create',
  templateUrl: './avenidas-create.component.html',
  styleUrls: ['./avenidas-create.component.scss']
})
export class AvenidasCreateComponent implements OnInit {
  formAvenidas: FormGroup;
  Residencial: Residencial[] = [];
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private avenidasService: AvenidasService,
    private residencialsService: ResidencialService,
    private router: Router,
    private route: ActivatedRoute
  ) 
  { 
    this.formAvenidas = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      residencialId: [0, Validators.required],  
      createdBy: [''],      
      updatedBy: [''],
      updatedDate: [''],
    });
  }

  ngOnInit(): void { 
    this.getResidencial();   
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.loadAvenidas(id);
      }
    });
  }


  getResidencial(): void {
    this.residencialsService.getResidencials()
      .subscribe((data: Residencial[]) => {      
        this.Residencial = data;
      });
  }

  loadAvenidas(id: number): void {
    this.avenidasService.getByIdAvenidas(id).subscribe((avenida: Avenidas) => {                
      this.formAvenidas.patchValue(avenida);
    });
  }

  save(): void {
    if (this.isEditMode) {
      this.updateAvenidas();
    } else {
      this.createAvenidas();
    }
  }

  createAvenidas(): void {
    const avenidas = this.formAvenidas.value;
    this.avenidasService.createAvenidas(avenidas)
      .subscribe(response => {
        $.notify({
          icon: "Creacion",
          message: `Avenidas creada con éxito.`
        }, {
          type: 'success',
          timer: 4000,
          placement: {
            from: "bottom",
            align: "right"
          }
        });

        this.router.navigate(['avenidas']);
      });
  }

  updateAvenidas(): void {
    const avenidas = this.formAvenidas.value;
    this.avenidasService.updateAvenidas(avenidas)
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

        this.router.navigate(['avenidas']);
      });
  }

  Cancelar() {
    this.router.navigate(['avenidas']);
  }

  get nombre() {
    return this.formAvenidas.get('name') as FormControl;
  }
  get ResidencialId() {
    return this.formAvenidas.get('residencialId') as FormControl;
  }
  get createdBy() {
    return this.formAvenidas.get('createdBy') as FormControl;
  }
  get createdDate() {
    return this.formAvenidas.get('createdDate') as FormControl;
  }

  get updatedBy() {
    return this.formAvenidas.get('updatedBy') as FormControl;
  }
  get updatedDate() {
    return this.formAvenidas.get('updatedDate') as FormControl;
  }


  }
