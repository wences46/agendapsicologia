import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paciente, PacientePage } from './paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(
    private http: HttpClient
  ) { }


  listar(): Observable<Paciente[]>{
    return this.http.get<Paciente[]>(`${environment.apiBase}/admin/pacientes/listar`);
  }


  paginar(size: number = 5, page: number = 0): Observable<PacientePage> {
    let params = new HttpParams();
    params = params.append('size', size);
    params = params.append('page', page);
    params = params.append('sort', 'numExp,asc');

    return this.http.get<PacientePage>(`${environment.apiBase}/admin/paciente`, { params });
  }


  obtener(id: number): Observable<Paciente>{
    return this.http.get<Paciente>(`${environment.apiBase}/admin/paciente/${id}`);
  }  


  crear(paciente: Paciente): Observable<Paciente>{
    return this.http.post<Paciente>(`${environment.apiBase}/admin/pacientes`, paciente);
  }


  actualizar(idPaciente: number, paciente: Paciente): Observable<Paciente>{
    return this.http.put<Paciente>(`${environment.apiBase}/admin/pacientes/${idPaciente}`, paciente);    
  }



  eliminar(id: number){
    return this.http.delete<Paciente>(`${environment.apiBase}/admin/paciente/${id}`);
  }



  subirArchivo(formData: FormData) {
    return this.http.post(`${environment.apiBase}/assets/upload`, formData);
  }




}
