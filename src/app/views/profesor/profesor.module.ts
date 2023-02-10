import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MisRoutes } from './profesor-routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { SelectProfesorComponent } from './select-profesor/select-profesor.component';

import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { AsignaturaEstudianteComponent } from './asignatura-estudiante/asignatura-estudiante.component';

@NgModule({
  declarations: [
    ContenedorComponent,
    SelectProfesorComponent,
    AsignaturaEstudianteComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(MisRoutes),
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    SharedModule,

  ]
})
export class ProfesorModule { }
