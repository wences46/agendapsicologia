import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailUnicoValidator } from '../shared/email-unico.validator';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {
  formulario: FormGroup = this.fb.group({
    nombres: [, [Validators.required]],
    apellidos: [, [Validators.required]],
    email: [, [Validators.required, Validators.email], [this.emailUnicoValidator]],
    password: [, [Validators.required, Validators.minLength(4)]]
  })
  passwordVisible = false;

  constructor(
    private fb: FormBuilder,
    private emailUnicoValidator: EmailUnicoValidator,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  controlTieneError(control: string, error: string) {
    return this.formulario.controls[control].hasError(error);
  }

  registrar() {
    if (this.formulario.invalid) {
      return;
    }

    const registroValues = this.formulario.value;

    this.authService.registrar(registroValues)
      .subscribe(() => {
        this.authService.login({ username: registroValues.email, password: registroValues.password })
          .subscribe(() => {
            this.router.navigate(['']);

            this.snackBar.open(`Bienvenido ${this.authService.name}`, 'Cerrar', {
              duration: 5 * 1000,
              horizontalPosition: 'center',
              verticalPosition: 'top'
            })
          })
      })
  }

}