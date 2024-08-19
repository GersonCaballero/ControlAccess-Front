import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ResidencialListComponent } from 'app/views/Residencial/residencial-list/residencial-list.component';
import { ResidencialCreateComponent } from 'app/views/Residencial/residencial-create/residencial-create.component';
import { AvenidasCreateComponent } from 'app/views/Avenidas/avenidas-create/avenidas-create.component';
import { AvenidasListComponent } from 'app/views/Avenidas/avenidas-list/avenidas-list.component';
import { BloquesCreateComponent } from 'app/views/Bloques/bloques-create/bloques-create.component';
import { BloquesListComponent } from 'app/views/Bloques/bloques-list/bloques-list.component';
import { CallesCreateComponent } from 'app/views/Calles/calles-create/calles-create.component';
import { CallesListComponent } from 'app/views/Calles/calles-list/calles-list.component';
import { ZonasListComponent } from 'app/views/Zonas/zonas-list/zonas-list.component';
import { ZonasCreateComponent } from 'app/views/Zonas/zonas-create/zonas-create.component';
import { CasasCreateComponent } from 'app/views/Casas/casas-create/casas-create.component';
import { CasasListComponent } from 'app/views/Casas/casas-list/casas-list.component';
import { InmueblesListComponent } from 'app/views/Inmuebles/inmuebles-list/inmuebles-list.component';
import { InmueblesCreateComponent } from 'app/views/Inmuebles/inmuebles-create/inmuebles-create.component';
import { TarifasCreateComponent } from 'app/views/Tarifas/tarifas-create/tarifas-create.component';
import { TarifasListComponent } from 'app/views/Tarifas/tarifas-list/tarifas-list.component';
import { TipoUsuarioListComponent } from 'app/views/TipoUsuario/tipo-usuario-list/tipo-usuario-list.component';
import { TipoUsuarioCreateComponent } from 'app/views/TipoUsuario/tipo-usuario-create/tipo-usuario-create.component';
import { UsuariosCreateComponent } from 'app/views/Usuarios/usuarios-create/usuarios-create.component';
import { UsuariosListComponent } from 'app/views/Usuarios/usuarios-list/usuarios-list.component';
import { VisitantesListComponent } from 'app/views/Visitantes/visitantes-list/visitantes-list.component';
import { VisitantesCreateComponent } from 'app/views/Visitantes/visitantes-create/visitantes-create.component';
import { ReportesListComponent } from 'app/views/Reportes/reportes-list/reportes-list.component';
import { ReportesCreateComponent } from 'app/views/Reportes/reportes-create/reportes-create.component';


export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'user-profile',             component: UserProfileComponent },
    { path: 'dashboard',                component: DashboardComponent },
    { path: 'table-list',               component: TableListComponent },
    { path: 'typography',               component: TypographyComponent },
    { path: 'icons',                    component: IconsComponent },
    { path: 'maps',                     component: MapsComponent },
    { path: 'notifications',            component: NotificationsComponent },
    { path: 'upgrade',                  component: UpgradeComponent },
    { path: 'residencials',             component: ResidencialListComponent },
    { path: 'residencials/create',      component: ResidencialCreateComponent },
    { path: 'residencials/edit/:id',    component: ResidencialCreateComponent },
    { path: 'avenidas',                 component: AvenidasListComponent },
    { path: 'avenidas/create',          component: AvenidasCreateComponent },
    { path: 'avenidas/edit/:id',        component: AvenidasCreateComponent },
    { path: 'bloques',                  component: BloquesListComponent },
    { path: 'bloques/create',           component: BloquesCreateComponent },
    { path: 'bloques/edit/:id',         component: BloquesCreateComponent },
    { path: 'calles',                   component: CallesListComponent},
    { path: 'calles/create',            component: CallesCreateComponent},
    { path: 'calles/edit/:id',          component: CallesCreateComponent},    
    { path: 'zonas',                    component: ZonasListComponent},
    { path: 'zonas/create',             component: ZonasCreateComponent},
    { path: 'zonas/edit/:id',           component: ZonasCreateComponent},
    { path: 'casas',                    component: CasasListComponent},
    { path: 'casas/create',             component: CasasCreateComponent},
    { path: 'casas/edit/:id',           component: CasasCreateComponent},
    { path: 'inmuebles',                component: InmueblesListComponent},
    { path: 'inmuebles/create',         component: InmueblesCreateComponent},
    { path: 'inmuebles/edit/:id',       component: InmueblesCreateComponent},
    { path: 'tarifas',                  component: TarifasListComponent},
    { path: 'tarifas/create',           component: TarifasCreateComponent},
    { path: 'tarifas/edit/:id',         component: TarifasCreateComponent},
    { path: 'tipousuarios',             component: TipoUsuarioListComponent},
    { path: 'tipousuarios/create',      component: TipoUsuarioCreateComponent},
    { path: 'tipousuarios/edit/:id',    component: TarifasCreateComponent},
    { path: 'usuarios',                 component: UsuariosListComponent},
    { path: 'usuarios/create',          component: UsuariosCreateComponent},
    { path: 'usuarios/edit/:id',        component: UsuariosCreateComponent},
    { path: 'visitantes',               component: VisitantesListComponent},
    { path: 'visitantes/create',        component: VisitantesCreateComponent},
    { path: 'visitantes/edit/:id',      component: VisitantesCreateComponent},
    { path: 'reportes',                 component: ReportesListComponent},
    { path: 'reportes/create',          component: ReportesCreateComponent},
    { path: 'reportes/edit/:id',        component: ReportesCreateComponent},
];
