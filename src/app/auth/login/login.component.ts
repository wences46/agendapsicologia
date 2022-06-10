import { Component, OnInit } from '@angular/core';
import { Credentials } from '../shared/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  credentials: Credentials =  {
    username: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  login(){

  }

}
