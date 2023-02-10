import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.scss']
})
export class ContenedorComponent implements OnInit {
  profesorId = 0;

  constructor() { }

  ngOnInit(): void {
  }

  profesorSelecionado(event : any){
    this.profesorId = event ? event.id : 0;
  }

}
