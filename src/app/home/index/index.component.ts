import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/home.service';
import { Paciente } from '../../admin/pacientes/shared/paciente.model';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: [
  ]
})
export class IndexComponent implements OnInit {
  ultimosPacientes?: Paciente[];

  constructor(
    private homeService: HomeService,
    
  ) { }

  ngOnInit(): void {
    this.homeService.getUltimosPacientes()
      .subscribe(ultimosPacientes =>{
        this.ultimosPacientes = ultimosPacientes;
      });
    }

  }


