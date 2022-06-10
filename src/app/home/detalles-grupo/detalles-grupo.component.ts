import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Grupo } from '../shared/grupo.model';
import { HomeService } from '../shared/home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-grupo',
  templateUrl: './detalles-grupo.component.html',
  styles: [
  ]
})
export class DetallesGrupoComponent implements OnInit {
  grupo?: Grupo;

  constructor(private homeService: HomeService,
    private route: ActivatedRoute
    ){ }

  ngOnInit(): void {
    const idGrupo = parseInt(this.route.snapshot.paramMap.get('idGrupo')!);

    this.homeService.getGrupo(idGrupo)
    .subscribe(grupo => {
      this.grupo = grupo;
    })

  
  }

}
