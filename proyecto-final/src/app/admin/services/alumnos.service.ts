import { Injectable } from '@angular/core';
import { Alumno } from '../shared/models/Alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor() { }

  alumnos:Alumno[] = [
	{
		id:1,
		nombre:'GASPAR',
		apellido:'SANTILLAN',
		fechaNacimiento:'11/06/1998',
		email:'gazz9ar@gmail.com'
	},
	{
		id:2,
		nombre:'JUAN',
		apellido:'CARLOS',
		fechaNacimiento:'12/02/1996',
		email:'juancarlos@gmail.com'
	},
	{
		id:3,
		nombre:'FRANCO',
		apellido:'JUNCOS',
		fechaNacimiento:'01/09/2000',
		email:'francojuncos@gmail.com'
	}
]

  getAlumnos():Alumno[] {

	
	return this.alumnos;
  }

  createUpdateAlumno(alumno:Alumno):Alumno[] {
	if (alumno.id === 0) {
		// create
		this.alumnos.push(alumno);
		
	} else {
		
		this.alumnos = this.alumnos.map(obj =>
			obj.id === alumno.id ? { ...obj, completed: true } : obj
		);		
		
	}
	return this.alumnos;
  }

  deleteAlumno(id:number):void {
	 
	  this.alumnos = this.alumnos.filter(cli => cli.id !== id);	

	//   return this.alumnos;
  }


}
