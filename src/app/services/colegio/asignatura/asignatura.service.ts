import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  private ApiUrl: string;

  constructor(
    protected http: HttpClient,
  ) {
    this.ApiUrl = [environment.api_url, 'asignatura'].join('/');
  }

  findByProfesor(profesorId : number): Observable<any> {
    const ruta = [this.ApiUrl, 'find-by-profesor', profesorId].join('/');
    return this.http.get(ruta);
  }
}
