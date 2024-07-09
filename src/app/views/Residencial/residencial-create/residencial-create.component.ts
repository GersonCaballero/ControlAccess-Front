import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Residencial } from 'app/models/Residencial';
import { ResidencialService } from 'app/services/residencialservice';
declare var $: any;

@Component({
  selector: 'app-residencial-create',
  templateUrl: './residencial-create.component.html',
  styleUrls: ['./residencial-create.component.scss']
})
export class ResidencialCreateComponent implements OnInit {

  residencial: Residencial = {
    id: 0,
    name: '',
    address: '',
    imageUrl: ''
  };
  isEditMode: boolean = false;

  constructor(
    private residencialService: ResidencialService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.loadResidencial(id);
      }
    });
  }

  loadResidencial(id: number): void {
    this.residencialService.getByIdResidencial(id).subscribe((residencial: Residencial) => {
      this.residencial = residencial;
    });
  }

  save(): void {
    if (this.isEditMode) {
      this.updateResidencial();
    } else {
      this.createResidencial();
    }
  }

  createResidencial(): void {
    this.residencialService.createResidencial(this.residencial)
      .subscribe(response => {
        $.notify({
          icon: "Creacion",
          message: `Residencial creada con éxito.`
        }, {
          type: 'success',
          timer: 4000,
          placement: {
            from: "bottom",
            align: "right"
          }
        });

        this.router.navigate(['residencials']);
      });
  }

  updateResidencial(): void {
    this.residencialService.updateResidencial(this.residencial)
      .subscribe(response => {
        $.notify({
          icon: "Edición",
          message: `Residencial actualizada con éxito.`
        }, {
          type: 'success',
          timer: 4000,
          placement: {
            from: "bottom",
            align: "right"
          }
        });

        this.router.navigate(['residencials']);
      });
  }

}
