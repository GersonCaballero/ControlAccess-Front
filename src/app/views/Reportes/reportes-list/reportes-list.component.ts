import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportesService } from 'app/services/reportesservice.service';
import { Reportes } from 'app/models/Reportes';
import { FilterReportesPipe } from 'app/views/search/Pipe/filter-reportes.pipe';
declare var $: any;

@Component({
  selector: 'app-reportes-list',
  templateUrl: './reportes-list.component.html',
  styleUrls: ['./reportes-list.component.scss']
})
export class ReportesListComponent implements OnInit {
  reportes: Reportes[] = [];
  reporteSeleccionado: Reportes | null = null;
  mostrarModal: boolean = false;
  searchTerm: string = '';
  showSearchField: boolean = false;

  constructor(
    private reportesService: ReportesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getReportes();
  }

  getReportes(): void {
    this.reportesService.getReportes().subscribe((data: Reportes[]) => {
      this.reportes = data;
    });
  }

  createReporte(): void {
    this.router.navigate(['/reportes/create']);
  }

  edit(reportes: Reportes): void {
    this.router.navigate([`/reportes/edit/${reportes.id}`]);
  }

  delete(reportes: Reportes): void {
    if (reportes) {
      this.reportesService.deleteByIdReportes(reportes.id).subscribe(() => {        
        this.getReportes();
        $.notify({
          icon: "Eliminar",
          message: `El reporte ${reportes.tipoReporte} fue eliminado con éxito.`
        },{
          type: 'danger',
          timer: 4000,
          placement: {
            from: "bottom",
            align: "right"
          }
        });
      });
    }
  }

  showSearch(): void {
    this.showSearchField = !this.showSearchField;
  }

  openModalDelete(reportes: Reportes): void {
    this.reporteSeleccionado = reportes;
    this.mostrarModal = true;
  }

  closeModalDelete(): void {
    this.reporteSeleccionado = null;
  }
}
