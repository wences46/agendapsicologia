
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from '../../home/home-layout/home-layout.component';
import { LoginComponent } from './login.component';
import { RegistroComponent } from '../registro/registro.component';



const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    
    children:[
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registro',
        component: RegistroComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { } 

