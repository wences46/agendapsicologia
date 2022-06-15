import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Credentials } from '../shared/auth.model';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  credentials: Credentials = {
    username: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router
    
  ) { }

  ngOnInit(): void {
  }

  login(formulario: NgForm) {
    if (formulario.invalid) {
      return;
    }
    this.authService.login(this.credentials)
      .subscribe(() => {
        console.log('login');
        this.router.navigate(['']);
      })
    }
  
  }

