import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { IndexComponent } from './index/index.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HomeRoutingModule } from './home-routing.module';
import { PacientesComponent } from './pacientes/pacientes.component';
import { TarjetaPacienteComponent } from './shared/tarjeta-paciente/tarjeta-paciente.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DetallesPacienteComponent } from './detalles-paciente/detalles-paciente.component';
import { ColectorComponent } from './colector/colector.component';



@NgModule({
  declarations: [
    IndexComponent,
    HomeLayoutComponent,
    PacientesComponent,
    TarjetaPacienteComponent,
    DetallesPacienteComponent,
    ColectorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    HomeRoutingModule,
    InfiniteScrollModule
  ]
})
export class HomeModule { }
