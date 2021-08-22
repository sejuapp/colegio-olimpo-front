import { MessageCustom } from './../../shared/interfaces/message';
import { AsignaturaService } from './../../../services/colegio/asignatura/asignatura.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-asignatura-estudiante',
  templateUrl: './asignatura-estudiante.component.html',
  styleUrls: ['./asignatura-estudiante.component.scss']
})
export class AsignaturaEstudianteComponent implements OnInit {
  @Input() profesorId: number = 0;
  @ViewChild(MatAccordion) miAccordion!: MatAccordion;

  msgs: MessageCustom[] = [];
  loading: boolean = false;
  lstAsignaturas: Array<any> = [];

  reporte = {
    totalAlumnos: 0,
    totalMaterias: 0,
    totalAsignaciones: 0
  }

  displayedColumns: string[] = ['icon', 'estudianteNombre'];

  constructor(
    private srvAsignatura: AsignaturaService
  ) { }

  ngOnInit(): void {
    this.consultaInicial();
  }

  ngOnChanges(changes: any) {
    if (changes != null) {
      if (changes.profesorId != null) {
        this.consultaInicial();
      }
    }
  }

  async consultaInicial() {
    try {
      this.msgs = [];
      this.lstAsignaturas = [];
      this.contadoresCero();
      if (this.profesorId != 0) {
        this.loading = true;
        this.lstAsignaturas = await this.srvAsignatura.findByProfesor(this.profesorId).toPromise();
        this.contar();
        setTimeout(() => { this.loading = false; }, 900);
      }

    } catch (error) {
      this.loading = false;
      this.msgs.push({ severity: 'e', summary: 'Error', detail: `Ha ocurrido un error al interntar realizar la consulta de asignaturas y estudiantes: ${error.message}` });
    }
  }

  contadoresCero(){
    this.reporte.totalAlumnos = 0;
    this.reporte.totalMaterias = 0;
    this.reporte.totalAsignaciones = 0;
  }

  contar() {

    this.contadoresCero();

    let contador = 0;
    for (const iterator of this.lstAsignaturas) {
      contador += iterator.lstEstudiantes.length;
    }


    let valor = this.lstAsignaturas.reduce((groups, item) => {
      var val = item['nombre'];
      groups[val] = groups[val] || null;
      return groups;
    }, {});

    this.reporte.totalAlumnos = contador;
    this.reporte.totalMaterias = Object.keys(valor).length;
    this.reporte.totalAsignaciones = this.lstAsignaturas.length;

    return contador;
  }

  openAll() {
    this.miAccordion.openAll();
  }

  closeAll() {
    this.miAccordion.closeAll();
  }
}
