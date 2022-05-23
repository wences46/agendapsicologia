import { Component, Input, OnInit } from '@angular/core';
import { Paciente } from 'src/app/admin/pacientes/shared/paciente.model';
import { ColectorService } from '../colector.service';


@Component({
  selector: 'app-tarjeta-paciente',
  templateUrl: './tarjeta-paciente.component.html',
  styleUrls: [    
  ]
})
export class TarjetaPacienteComponent implements OnInit {

  @Input()  pacienteTarjeta!: Paciente;

  constructor(
    private colectorService: ColectorService
  ) { }

  ngOnInit(): void {
  }

  agregarPacienteAlColector(){
    this.colectorService.agregarItem(this.pacienteTarjeta);
  }

  removerPacienteDelColector(){
    this.colectorService.removerItem(this.pacienteTarjeta);
  }

  pacienteYaEstaEnElColector(){
    return this.colectorService.itemYaExiste(this.pacienteTarjeta);      

  }


}
