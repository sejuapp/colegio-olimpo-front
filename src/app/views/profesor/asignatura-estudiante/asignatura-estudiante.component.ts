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
  @Input() profesorId : number = 0;
  @ViewChild(MatAccordion) miAccordion!: MatAccordion;

  msgs: MessageCustom[] = [];
  loading : boolean = false;
  lstAsignaturas : Array<any> = [];

  displayedColumns: string[] = ['icon', 'estudianteNombre'];

  constructor(
    private srvAsignatura : AsignaturaService
  ) { }

  ngOnInit(): void {
    this.consultaInicial();
  }

  ngOnChanges(changes : any) {
    if (changes != null) {
      if (changes.profesorId != null) {
        this.consultaInicial();
      }
    }
  }

  async consultaInicial(){
    try {
      this.msgs = [];
      this.lstAsignaturas = [];
      if(this.profesorId != 0){
        this.loading = true;
        this.lstAsignaturas = await this.srvAsignatura.findByProfesor(this.profesorId).toPromise();
        setTimeout(()=> {this.loading = false;}, 900);
      }

    } catch (error) {
      this.loading = false;
      this.msgs.push({ severity: 'e', summary: 'Error', detail: `Ha ocurrido un error al interntar realizar la consulta de asignaturas y estudiantes: ${error.message}`  });
    }
  }

  openAll(){
    this.miAccordion.openAll();
  }

  closeAll(){
    this.miAccordion.closeAll();
  }
}
