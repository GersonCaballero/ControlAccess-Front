import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ResidencialListComponent } from './views/Residencial/residencial-list/residencial-list.component';
import { ResidencialCreateComponent } from './views/Residencial/residencial-create/residencial-create.component';
import { AvenidasCreateComponent } from './views/Avenidas/avenidas-create/avenidas-create.component';
import { AvenidasListComponent } from './views/Avenidas/avenidas-list/avenidas-list.component';
import { BloquesCreateComponent } from './views/Bloques/bloques-create/bloques-create.component';
import { BloquesListComponent } from './views/Bloques/bloques-list/bloques-list.component';
import { CallesCreateComponent } from './views/Calles/calles-create/calles-create.component';
import { CallesListComponent } from './views/Calles/calles-list/calles-list.component';
import { ZonasCreateComponent } from './views/Zonas/zonas-create/zonas-create.component';
import { ZonasListComponent } from './views/Zonas/zonas-list/zonas-list.component';
import { CasasCreateComponent } from './views/Casas/casas-create/casas-create.component';
import { CasasListComponent } from './views/Casas/casas-list/casas-list.component';
import { InmueblesCreateComponent } from './views/Inmuebles/inmuebles-create/inmuebles-create.component';
import { InmueblesListComponent } from './views/Inmuebles/inmuebles-list/inmuebles-list.component';
import { TarifasCreateComponent } from './views/Tarifas/tarifas-create/tarifas-create.component';
import { TarifasListComponent } from './views/Tarifas/tarifas-list/tarifas-list.component';
import { TipoUsuarioCreateComponent } from './views/TipoUsuario/tipo-usuario-create/tipo-usuario-create.component';
import { TipoUsuarioListComponent } from './views/TipoUsuario/tipo-usuario-list/tipo-usuario-list.component';
import { UsuariosCreateComponent } from './views/Usuarios/usuarios-create/usuarios-create.component';
import { UsuariosListComponent } from './views/Usuarios/usuarios-list/usuarios-list.component';
import { FilterAvenidasPipe } from './views/search/Pipe/filter-avenidas.pipe';
import { FilterBloquesPipe } from './views/search/Pipe/filter-bloques.pipe';
import { FilterCalllesPipe } from './views/search/Pipe/filter-calles.pipe';
import { FilterCasasPipe } from './views/search/Pipe/filter-casa.pipe';
import { FilterZonaPipe } from './views/search/Pipe/filter-zonas.pipe';
import { FilterInmueblesPipe } from './views/search/Pipe/filter-imuebles.pipe';
import { FilterTarifasPipe } from './views/search/Pipe/filter-tarifas.pipe';
import { FilterTipoUsuarioPipe } from './views/search/Pipe/filter-tipDeUsuario.pipe'; 
import { FilterUsuariosPipe } from './views/search/Pipe/filter-usuarios.pipe';
import { VisitantesCreateComponent } from './views/Visitantes/visitantes-create/visitantes-create.component';
import { VisitantesListComponent } from './views/Visitantes/visitantes-list/visitantes-list.component';
import { FilterVisitantesPipe } from './views/search/Pipe/filter-visitantes.pipe';
import { ReportesCreateComponent } from './views/Reportes/reportes-create/reportes-create.component';
import { ReportesListComponent } from './views/Reportes/reportes-list/reportes-list.component';
import { FilterReportesPipe } from './views/search/Pipe/filter-reportes.pipe';
import { IncidenciasCreateComponent } from './views/Incidencias/incidencias-create/incidencias-create.component';
import { IncidenciasListComponent } from './views/Incidencias/incidencias-list/incidencias-list.component';
import { FilterIncidenciasPipe } from './views/search/Pipe/filter-incidencias.pipe';
import { VehiculosCreateComponent } from './views/Vehiculos/vehiculos-create/vehiculos-create.component';
import { VehiculosListComponent } from './views/Vehiculos/vehiculos-list/vehiculos-list.component';
import { AccesosCreateComponent } from './views/Accesos/accesos-create/accesos-create.component';
import { AccesosListComponent } from './views/Accesos/accesos-list/accesos-list.component';
import { FilterAccesosPipe } from './views/search/Pipe/filter-accesos.pipe';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ResidencialListComponent,
    ResidencialCreateComponent,
    AvenidasCreateComponent,
    AvenidasListComponent,
    BloquesCreateComponent,
    BloquesListComponent,
    CallesCreateComponent,
    CallesListComponent,
    ZonasCreateComponent,
    ZonasListComponent,
    CasasCreateComponent,
    CasasListComponent,
    InmueblesCreateComponent,
    InmueblesListComponent,
    TarifasCreateComponent,
    TarifasListComponent,
    TipoUsuarioCreateComponent,
    TipoUsuarioListComponent,
    UsuariosCreateComponent,
    UsuariosListComponent,
    FilterAvenidasPipe,
    FilterBloquesPipe,
    FilterCalllesPipe,
    FilterCasasPipe,
    FilterZonaPipe,
    FilterInmueblesPipe,
    FilterTarifasPipe,
    FilterTipoUsuarioPipe,
    FilterVisitantesPipe,
    FilterUsuariosPipe,
    FilterIncidenciasPipe,
    VisitantesCreateComponent,
    VisitantesListComponent,
    ReportesCreateComponent,
    ReportesListComponent,
    FilterReportesPipe,
    IncidenciasCreateComponent,
    IncidenciasListComponent,
    VehiculosCreateComponent,
    VehiculosListComponent,
    AccesosCreateComponent,
    AccesosListComponent,
    FilterAccesosPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
