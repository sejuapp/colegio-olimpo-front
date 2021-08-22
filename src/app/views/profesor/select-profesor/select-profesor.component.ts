import { HelperValidatorService } from './../../../services/helper/helpers-validators/helper-validator.service';
import { MessageCustom } from './../../shared/interfaces/message';
import { ProfesorService } from './../../../services/colegio/profesor/profesor.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-profesor',
  templateUrl: './select-profesor.component.html',
  styleUrls: ['./select-profesor.component.scss']
})
export class SelectProfesorComponent implements OnInit {
  @Output() public emiter = new EventEmitter();

  msgs: MessageCustom[] = [];

  loading : boolean = false;

  lstProfesores : Array<any> = [];

  selectForm: FormGroup = this.fb.group({
    profesor: new FormControl(null, [Validators.required, this.srvHelperValidators.requireMatch])
  });

  constructor(
    private fb: FormBuilder,
    private srvProfesor : ProfesorService,
    private srvHelperValidators: HelperValidatorService,
  ) { }

  ngOnInit(): void {
    this.consultaInicial();
  }

  async consultaInicial(){
    try {
      this.loading = true;
      this.lstProfesores = await this.srvProfesor.findAll().toPromise();
      setTimeout(()=> {this.loading = false;}, 900);
    } catch (error) {
      this.loading = false;
      this.msgs.push({ severity: 'e', summary: 'Error', detail: `Ha ocurrido un error al interntar realizar la consulta de profesores: ${error.message}`  });
    }
  }

  seleccionar(){
    this.emiter.emit(this.f.profesor.value);
  }

  get f() { return this.selectForm.controls; }

}
