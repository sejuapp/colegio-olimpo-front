import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaEstudianteComponent } from './asignatura-estudiante.component';

describe('AsignaturaEstudianteComponent', () => {
  let component: AsignaturaEstudianteComponent;
  let fixture: ComponentFixture<AsignaturaEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignaturaEstudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaturaEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
