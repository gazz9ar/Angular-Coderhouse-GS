import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  title:string = 'Agregar nuevo alumno';
  disabledSubmit:boolean = false;
  errorNombre:boolean = false;
  errorEmail:boolean = false;
  formAlumno = new FormGroup({
    nombre: new FormControl('',[Validators.required,Validators.minLength(4)]),
    apellido: new FormControl('',[Validators.required,Validators.minLength(4)]),
    fechaNacimiento: new FormControl('',[Validators.required]),
	email: new FormControl('',[Validators.required,Validators.email]),	
  });
  constructor() { 
	  this.watchErrors();
  }

  watchErrors() {
	this.formAlumno.get('nombre')?.valueChanges.subscribe((resp) => {
		this.formAlumno.get('nombre')?.errors?.['minlength'] ? this.errorNombre = true : this.errorNombre = false;	
	})

	this.formAlumno.get('email')?.valueChanges.subscribe((resp) => {
		this.formAlumno.get('email')?.errors?.['email'] ? this.errorEmail = true : this.errorEmail = false;	
	})
  }
  ngOnInit(): void {
  }

  

  crearAlumno() {
	 this.disabledSubmit = true;
	 if (this.formAlumno.invalid) {		
		this.disabledSubmit = false;
		return;
	 }

	 // guardar alumno...
	  console.warn('falta código!!')
  }
}
