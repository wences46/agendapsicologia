import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/home.service';
import { Paciente } from '../../admin/pacientes/shared/paciente.model';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styles: [
  ]
})
export class PacientesComponent implements OnInit {
  
  pacientes: Paciente[] = [];
  page = 0;
  last = false;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.homeService.getPacientes()
      .subscribe(pacientePage => {
        this.page = pacientePage.number;
        this.last = pacientePage.last;
        this.pacientes = pacientePage.content;
      });
   

  }

  cargarMasPacientes(){      
    
    if (this.last) return;

    this.page++;

    this.homeService.getPacientes(this.page)
    .subscribe(pacientePage => {
      this.page = pacientePage.number;
      this.last = pacientePage.last;
      this.pacientes.push(...pacientePage.content)
    });

  }

}
