import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [   
    { path: '/residencials', title: 'Residenciales',  icon:'home', class: '' },
    { path: '/avenidas', title: 'Avenidas',  icon:'home', class: '' },
    { path: '/bloques', title: 'Bloques',  icon:'home', class: '' },
    { path: '/calles', title: 'Calles',  icon:'home', class: '' },
    { path: '/zonas', title: 'Zonas',  icon:'home', class: '' },
    { path: '/casas', title: 'Casas',  icon:'home', class: '' },
    { path: '/inmuebles', title: 'Inmuebles',  icon:'home', class: '' },
    { path: '/tarifas', title: 'Tarifas',  icon:'home', class: '' },
    { path: '/tipousuarios', title: 'Tipo de usuario',  icon:'home', class: '' },
    { path: '/usuarios', title: 'Usuarios',  icon:'home', class: '' },
    { path: '/visitantes', title: 'Visitantes',  icon:'home', class: '' },
    { path: '/reportes', title: 'Reportes',  icon:'home', class: '' },
    { path: '/incidencias', title: 'Incidencias',  icon:'home', class: '' },
    { path: '/vehiculos', title: 'Vehiculos',  icon:'home', class: '' },
    { path: '/accesos', title: 'Accesos', icon: 'home', class: ''},
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
