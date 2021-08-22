import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  private ApiUrl: string;

  constructor(
    protected http: HttpClient,
  ) {
    this.ApiUrl = [environment.api_url, 'profesor'].join('/');
  }

  findAll(): Observable<any> {
    const ruta = [this.ApiUrl, 'find-all'].join('/');
    return this.http.get(ruta);
  }
}
