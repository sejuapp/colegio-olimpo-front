import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  @Input() render = true;
  @Input() texto = '';

  htmlStr = 'Danos un momento, estamos preparando el modulo.';

  constructor() {
    if (this.texto == null || this.texto === '') {
      this.texto = this.htmlStr;
    }
   }

  ngOnInit(): void {
  }

}
