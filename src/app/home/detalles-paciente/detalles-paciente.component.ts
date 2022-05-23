import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../admin/pacientes/shared/paciente.model';
import { HomeService } from '../shared/home.service';
import { ActivatedRoute } from '@angular/router';
import { ColectorService } from '../shared/colector.service';

@Component({
  selector: 'app-detalles-paciente',
  templateUrl: './detalles-paciente.component.html',
  styles: [
  ]
})
export class DetallesPacienteComponent implements OnInit {
  paciente?: Paciente;

  constructor(
    private homeService: HomeService,
    private colectorService: ColectorService,
    private route: ActivatedRoute
  ) { 
    
  }

  ngOnInit(): void {
    const numExp = this.route.snapshot.paramMap.get('numExp')!;

    this.homeService.getPaciente(numExp)
    .subscribe(paciente =>{
      this.paciente = paciente;
    })
  }

  agregarPacienteAlColector(){
    this.colectorService.agregarItem(this.paciente!);
  }

  removerPacienteDelColector(){
    this.colectorService.removerItem(this.paciente!);
  }

  pacienteYaEstaEnElColector(){
    return this.colectorService.itemYaExiste(this.paciente!);      

  }


}
