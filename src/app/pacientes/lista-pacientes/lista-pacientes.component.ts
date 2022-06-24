/*
import { Component, OnInit } from '@angular/core';
import { Paciente } from '../shared/paciente.model';
import { PacienteService } from '../shared/paciente.service';


@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styles:[
  ]
})
export class ListaPacientesComponent implements OnInit {
  pacientes?: Paciente[];

  constructor(
    private pacienteService: PacienteService
  ) { }

  ngOnInit(): void {  
    this.getAll();
  
  }  



getAll(){
  this.pacienteService.listar()
  .subscribe(pacientes =>{
    this.pacientes = pacientes;
  })
}


  eliminar(paciente: Paciente){
    const respuesta = window.confirm('¿desea borrar el registro de este paciente?');

if(respuesta){
    this.pacienteService.eliminar(paciente.id)
    .subscribe(() =>{
      this.getAll();    
    })
  }

  }


}
*/