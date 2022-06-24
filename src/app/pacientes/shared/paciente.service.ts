/*
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
    return this.http.get<Paciente[]>(`${environment.apiBase}/admin/paciente/listar`);
  }

  paginar (size: number = 5, page: number = 0): Observable<PacientePage>{
    let params = new HttpParams();
    params = params.append('size', size);
    params = params.append('page', page);
    params = params.append('sort', 'fechaNacimiento, desc');

    return this.http.get<PacientePage>(`${environment.apiBase}/admin/paciente`, {params});
    
  }  

  obtener(id: number): Observable<Paciente> {
    return this.http.get<Paciente>(`${environment.apiBase}/admin/paciente/${id}`);

  }

  crear(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(`${environment.apiBase}/admin/paciente/crear`, paciente);
  }

  actualizar(id: number, paciente: Paciente ): Observable<Paciente> {
    return this.http.put<Paciente>(`${environment.apiBase}/admin/paciente/${id}`, paciente);

  }

  eliminar(id: number){
    return this.http.delete<Paciente>(`${environment.apiBase}/admin/paciente/${id}`);

  }


}
*/