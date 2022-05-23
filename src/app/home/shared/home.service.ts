import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Paciente } from '../../admin/pacientes/shared/paciente.model';
import { environment } from 'src/environments/environment';
import { PacientePage } from '../../pacientes/shared/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient 
    
  ) { } 
  
  getUltimosPacientes() {
    return this.http.get<Paciente[]>(`${environment.apiBase}/ultimos-pacientes`);
  }
  getPacientes(page: number = 0, size: number = 6) {
    let params = new HttpParams();
    params = params.append('size', size);
    params = params.append('page', page);
    params = params.append('sort', 'numExp,asc');

    return this.http.get<PacientePage>(`${environment.apiBase}/pacientes`, {params});
  }
  getPaciente(numExp: string) {
    return this.http.get<Paciente>(`${environment.apiBase}/pacientes/${numExp}`);
  }
}
