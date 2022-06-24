import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPacientesComponent } from './pacientes/lista-pacientes/lista-pacientes.component';
import { FormPacienteComponent } from './pacientes/form-paciente/form-paciente.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';


@NgModule({
  declarations: [
    ListaPacientesComponent,
    FormPacienteComponent,
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
   
  ]
})
export class AdminModule { }
