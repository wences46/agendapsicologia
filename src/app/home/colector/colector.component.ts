import { Component, OnInit } from '@angular/core';
import { ColectorService } from '../shared/colector.service';
import { Paciente } from '../../admin/pacientes/shared/paciente.model';

@Component({
  selector: 'app-colector',
  templateUrl: './colector.component.html',
  styles: [
  ]
})
export class ColectorComponent implements OnInit {

  constructor(
    private colectorService: ColectorService
  ) { }

  ngOnInit(): void {
  }

  get items(){
    return this.colectorService.items;
  }

  removerPacienteDelColector(paciente: Paciente){
    this.colectorService.removerItem(paciente);
  }

}
