import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.scss']
})
export class AddAlumnoComponent implements OnInit {
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

  ngOnInit(): void {
  }
  watchErrors() {
	this.formAlumno.get('nombre')?.valueChanges.subscribe((resp) => {
		this.formAlumno.get('nombre')?.errors?.['minlength'] ? this.errorNombre = true : this.errorNombre = false;	
	})

	this.formAlumno.get('email')?.valueChanges.subscribe((resp) => {
		this.formAlumno.get('email')?.errors?.['email'] ? this.errorEmail = true : this.errorEmail = false;	
	})
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
