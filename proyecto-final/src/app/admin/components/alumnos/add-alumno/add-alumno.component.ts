import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Alumno } from '../../../shared/models/Alumno';
import { AlumnosService } from '../../../services/alumnos.service';

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
	@Input() alumno!:Alumno;
	formAlumno = new FormGroup({
	  nombre: new FormControl('',[Validators.required,Validators.minLength(4)]),
	  apellido: new FormControl('',[Validators.required,Validators.minLength(4)]),
	  fechaNacimiento: new FormControl('',[Validators.required]),
	  email: new FormControl('',[Validators.required,Validators.email]),	
	});

	

  constructor(private alumnosService:AlumnosService) {
	this.watchErrors();
   }

  ngOnInit(): void {	   

	this.formAlumno.get('nombre')?.setValue(this.alumno.nombre);
	this.formAlumno.get('apellido')?.setValue(this.alumno.apellido);
	this.formAlumno.get('fechaNacimiento')?.setValue(new Date(this.alumno.fechaNacimiento));
	this.formAlumno.get('email')?.setValue(this.alumno.email);

	
	
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
	this.alumno.nombre = this.formAlumno.get('nombre')?.value;
	this.alumno.apellido = this.formAlumno.get('apellido')?.value;
	this.alumno.fechaNacimiento = this.formAlumno.get('fechaNacimiento')?.value;
	this.alumno.email = this.formAlumno.get('email')?.value;


	console.log(this.alumnosService.createUpdateAlumno(this.alumno));
 } 

}
