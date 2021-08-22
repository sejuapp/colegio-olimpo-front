import { ContenedorComponent } from './contenedor/contenedor.component';
import { Routes } from '@angular/router';

export const MisRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ContenedorComponent,
      }
    ]
  }
];
