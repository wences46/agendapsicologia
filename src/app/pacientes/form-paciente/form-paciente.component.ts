import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../shared/paciente.service';
import { Paciente } from '../shared/paciente.model';

@Component({
  selector: 'app-form-paciente',
  templateUrl: './form-paciente.component.html',
  styles: [
  ]
})
export class FormPacienteComponent implements OnInit {
  formulario?: FormGroup;  


  errors: any;  
  paciente?: Paciente;


  constructor(
    private fb: FormBuilder,    
    private pacienteService: PacienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }  
  

  ngOnInit(): void {
    const idPaciente = this.route.snapshot.paramMap.get('id_paciente');
    

    if(idPaciente){
      this.pacienteService.obtener(parseInt(idPaciente))
      .subscribe(paciente =>{        
        this.paciente = paciente;

        this.formulario = this.fb.group({
          nombre: [paciente.nombre, [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern('[a-zA-z ]+')], []],
          apePat: [paciente.apePat, [Validators.minLength(3), Validators.maxLength(30), Validators.pattern('[a-zA-z ]+')], []],    
          apeMat: [paciente.apeMat, [Validators.minLength(3), Validators.maxLength(30), Validators.pattern('[a-zA-z ]+')], []],    
          numExp: [paciente.numExp, [Validators.required, Validators.minLength(8), Validators.maxLength(9), Validators.pattern('[0-9]+')], []],
          telContacto: [paciente.telContacto, [Validators.minLength(10), Validators.maxLength(11), Validators.pattern('[0-9]+')], []],
          fechaNacimiento: [paciente.fechaNacimiento, []] 
        })
       
    })

  }else{

    this.formulario = this.fb.group({
      nombre: [, [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern('[a-zA-z ]+')], []],
      apePat: [, [Validators.minLength(3), Validators.maxLength(30), Validators.pattern('[a-zA-z ]+')], []],    
      apeMat: [, [Validators.minLength(3), Validators.maxLength(30), Validators.pattern('[a-zA-z ]+')], []],    
      numExp: [, [Validators.required, Validators.minLength(8), Validators.maxLength(9), Validators.pattern('[0-9]+')], []],
      telContacto: [, [Validators.minLength(10), Validators.maxLength(11), Validators.pattern('[0-9]+')], []],
      fechaNacimiento: [, []] 
    })

  }
  }

  controlTieneError(control: string, error: string){
    return this.formulario?.controls[control].hasError(error);
  }

  guardar(){

    if(this.formulario?.invalid){
      return;
    }


    const paciente = this.formulario?.value;

    let request;

    if (this.paciente){
      request = this.pacienteService.actualizar(this.paciente.idPaciente, paciente)
         

    }else{
      request = this.pacienteService.crear(paciente)      

    }
    
    request
    .subscribe({
      next: paciente =>{
        this.router.navigate(['/pacientes']);
      },
    })    
      
  }

}
