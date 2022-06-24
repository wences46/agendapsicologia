import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../shared/paciente.service';
import { PageEvent } from '@angular/material/paginator';
import { PacientePage, Paciente } from '../shared/paciente.model';


@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-pacientes.component.html',
  styles: [
  ]
})
export class ListaPacientesComponent implements OnInit {  
  pacientePage?: PacientePage;
  displayedColumns: string[] = ['numExp', 'nombre', 'apePat', 'apeMat', 'telContacto', 'fechaNacimiento', 
                                'estado', 'descripcion', 'precio', 'tutor', 'acciones', ]; 

  constructor(
    private pacienteService: PacienteService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.pacienteService.paginar()
      .subscribe(pacientePage => {
        this.pacientePage = pacientePage;
      })
  }

  eliminar(paciente: Paciente) {
    const respuesta = window.confirm('¿Estás seguro de eliminar este libro?');

    if (respuesta) {
      this.pacienteService.eliminar(paciente.id)
        .subscribe(() => {
          this.getAll();
        })
    }
  }

  paginarPacientes(event: PageEvent) {
    const page = event.pageIndex;
    const size = event.pageSize;

    this.pacienteService.paginar(size, page)
      .subscribe(pacientePage => {
        this.pacientePage = pacientePage;
      })
  }

}
