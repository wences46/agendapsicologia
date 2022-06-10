import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    email: [, [Validators.required, Validators.email], []],
    password: [, [Validators.required, Validators.minLength(4)]]
  })
  passwordVisible = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  controlTieneError(control: string, error: string) {
    return this.formulario.controls[control].hasError(error);
  }

  registrar() {

  }

}
