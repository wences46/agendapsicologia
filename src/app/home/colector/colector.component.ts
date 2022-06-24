import { Component, OnInit } from '@angular/core';
import { ColectorService } from '../shared/colector.service';
import { Paciente } from '../../admin/pacientes/shared/paciente.model';
import { HomeService } from '../shared/home.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-colector',
  templateUrl: './colector.component.html',
  styles: [
  ]
})
export class ColectorComponent implements OnInit {
  loading = false;

  constructor(
    private colectorService: ColectorService,
    private homeService: HomeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const token = this.route.snapshot.queryParamMap.get('token');

    if (token) {
      this.loading = true;

      this.homeService.comprobarPagoPaypal(token)
        .subscribe((response: any) => {
          if (response.success) {
            this.colectorService.removerItems();
            this.router.navigate(['detalles-grupo', response.id]);
          }
        })
    }
  }

  get items() {
    return this.colectorService.items;
  }

  get total() {
    return this.colectorService.items.map(i => i.precio).reduce((i1, i2) => i1 + i2, 0);
  }

  removerPacienteDelColector(paciente: Paciente) {
    this.colectorService.removerItem(paciente);
  }

  pagar() {
    const id = this.items.map(item => item.id);

    this.loading = true;

    this.homeService.crearPagoPaypal(id)
      .subscribe((response: any) => {
        window.location = response.url;
      })
  }

}
