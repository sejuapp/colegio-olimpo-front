import { MessageCustom } from './../interfaces/message';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  @Input() value: MessageCustom[] = [];
  msgs: MessageCustom[] = [];

  lstSeverity = [
    { tipo: 'success', abreviatura: 's', summary: 'EXITO', detail: 'Proceso realizado correctamente.' },
    { tipo: 'info', abreviatura: 'i', summary: 'INFORMACIÓN', detail: '' },
    { tipo: 'warning', abreviatura: 'w', summary: 'ATENCIÓN', detail: '' },
    { tipo: 'danger', abreviatura: 'e', summary: 'ERROR', detail: 'Lo sentimos ha ocurrido un error inesperado al iniciar el componente.' },
  ]

  constructor(
  ) { }

  ngOnInit(): void {
    //this.armarMensajes();
  }

  ngDoCheck() {
    this.armarMensajes();
  }

  armarMensajes() {
    this.msgs = [];
    for (const item of this.value) {
      const tipo = this.lstSeverity.find(miF => miF.abreviatura == item.severity || miF.tipo == item.severity);

      if (tipo) {
        let nMensaje: MessageCustom;
        nMensaje = {
          severity: tipo.tipo,
          summary: item.summary == null ? tipo.summary : item.summary,
          detail: item.detail == null ? tipo.detail : item.detail,
        }
        this.msgs.push(nMensaje);
      } else {
        let nMensaje: MessageCustom;
        nMensaje = {
          severity: 'md-color',
          summary: item.summary == null ? '' : item.summary,
          detail: item.detail == null ? '' : item.detail,
        }
        this.msgs.push(nMensaje);
      }
    }
  }

}
