import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Calles } from 'app/models/Calles';
import { CallesService } from 'app/services/callesservice';
import { Residencial } from 'app/models/Residencial';
import { ResidencialService } from 'app/services/residencialservice';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-calles-create',
  templateUrl: './calles-create.component.html',
  styleUrls: ['./calles-create.component.scss']
})
export class CallesCreateComponent implements OnInit {

  formCalles: FormGroup;
  Residencial: Residencial[] = [];
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private callesService: CallesService,
    private residencialsService: ResidencialService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.formCalles = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      residencialId: [0, Validators.required],
      createdBy: ['', Validators.required],              
    });
  }  

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getResidencial();
      const id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.loadCalles(id);
      }
    });
  }

  getResidencial(): void {
    this.residencialsService.getResidencials()
      .subscribe((data: Residencial[]) => {
        this.Residencial = data;
      });
  }

  loadCalles(id: number): void {
    this.callesService.getByIdCalles(id).subscribe((calles: Calles) => {
      this.formCalles.patchValue(calles);
    });
  }


  save(): void {
    if (this.isEditMode) {
      this.updateCalles();
    } else {
      this.createCalles();
    }
  }

  createCalles(): void {
    const calles = this.formCalles.value;
    this.callesService.createCalles(calles)
      .subscribe(response => {
        $.notify({
          icon: "Creacion",
          message: `Calles creada con éxito.`
        }, {
          type: 'success',
          timer: 4000,
          placement: {
            from: "bottom",
            align: "right"
          }
        });

        this.router.navigate(['calles']);
      });
  }

  updateCalles(): void {
    const calles = this.formCalles.value;
    this.callesService.updateCalles(calles)
      .subscribe(response => {
        $.notify({
          icon: "Edición",
          message: `Calles actualizada con éxito.`
        }, {
          type: 'success',
          timer: 4000,
          placement: {
            from: "bottom",
            align: "right"
          }
        });

        this.router.navigate(['calles']);
      });
  }


  cancelar () {
    this.router.navigate(['calles'])
  }

  get Nombre () {
    return this.formCalles.get('name') as FormControl;
  }
  get ResidencialId () {
    return this.formCalles.get('residencialId') as FormControl;
  }
  get CreatedBy () {
    return this.formCalles.get('createdBy') as FormControl;
  }
  get CreatedDate () {
    return this.formCalles.get('createdDate') as FormControl;
  }
  get UpdatedBy () {
    return this.formCalles.get('updatedBy') as FormControl;
  }
  get UpdatedDate () {
    return this.formCalles.get('updatedDate') as FormControl;
  }



}
