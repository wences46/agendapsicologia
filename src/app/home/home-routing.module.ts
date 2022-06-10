
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { DetallesPacienteComponent } from './detalles-paciente/detalles-paciente.component';
import { ColectorComponent } from './colector/colector.component';
import { DetallesGrupoComponent } from './detalles-grupo/detalles-grupo.component';


const routes: Routes = [
  {    

    path: '',
    component: HomeLayoutComponent,

    children:[
      {
        path: '',
        component: IndexComponent
      }, 
      {
      path: 'pacientes',
      component: PacientesComponent
    },    
    {
      path: 'pacientes/:numExp',
      component: DetallesPacienteComponent
    } ,
    {
      path: 'colector',
      component: ColectorComponent
    },
    {
      path: 'detalles-grupo/:idGrupo',
      component: DetallesGrupoComponent
    }      
    ]
  }  
 

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { } 

