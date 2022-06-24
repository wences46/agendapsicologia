
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPacientesComponent } from './pacientes/lista-pacientes/lista-pacientes.component';
import { FormPacienteComponent } from './pacientes/form-paciente/form-paciente.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';


const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children:[
      {
        path: 'pacientes',
        component: ListaPacientesComponent
      },
     
      {
        path: 'pacientes/:id/editar',
        component: FormPacienteComponent  
    },
    {
      path: 'pacientes/nuevo',
      component: FormPacienteComponent  
  }
    ]
  }  
 

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { } 

