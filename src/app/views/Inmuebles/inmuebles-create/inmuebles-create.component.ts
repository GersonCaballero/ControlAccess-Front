import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Inmuebles } from 'app/models/Inmuebles';
import { InmueblesService } from 'app/services/inmueblesservice';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-inmuebles-create',
  templateUrl: './inmuebles-create.component.html',
  styleUrls: ['./inmuebles-create.component.scss']
})
export class InmueblesCreateComponent implements OnInit {
  formInmuebles: FormGroup;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private inmueblesService: InmueblesService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.formInmuebles = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      createdBy: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.loadInmuebles(id);
      }
    });
  }

  loadInmuebles(id: number): void {
    this.inmueblesService.getByIdInmuebles(id).subscribe((inmuebles: Inmuebles) => {
      console.log('Inmuebles: ',inmuebles);
      this.formInmuebles.patchValue(inmuebles);
    });
  }


  save(): void {
    if (this.isEditMode) {
      this.updateInmuebles();
    } else {
      this.createInmuebles();
    }
  }

  createInmuebles(): void {
    const inmuebles = this.formInmuebles.value;
    this.inmueblesService.createInmuebles(inmuebles)
      .subscribe(response => {
        $.notify({
          icon: "Creacion",
          message: `Inmuebles creada con éxito.`
        }, {
          type: 'success',
          timer: 4000,
          placement: {
            from: "bottom",
            align: "right"
          }
        });

        this.router.navigate(['inmuebles']);
      });
  }

  updateInmuebles(): void {
    const inmuebles = this.formInmuebles.value;
    this.inmueblesService.updateInmuebles(inmuebles)
      .subscribe(response => {
        $.notify({
          icon: "Edición",
          message: `Inmuebles actualizada con éxito.`
        }, {
          type: 'success',
          timer: 4000,
          placement: {
            from: "bottom",
            align: "right"
          }
        });

        this.router.navigate(['inmuebles']);
      });
  }
  cancelar() {
    this.router.navigate(['inmuebles'])
  }

  get Nombre() {
    return this.formInmuebles.get('name');
  }
  get CreatedBy() {
    return this.formInmuebles.get('createdBy');
  }
  get CreatedDate() {
    return this.formInmuebles.get('createdDate');
  } 
  get UpdatedBy() {
    return this.formInmuebles.get('updatedBy');
  }
  get UpdatedDate() {
    return this.formInmuebles.get('updatedDate');
  }

}
