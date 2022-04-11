import { Component, OnInit } from '@angular/core';
import { Alumno } from '../shared/models/Alumno';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  createEdit:boolean = false;
  alumno!:Alumno;
  constructor() { 
	  
  }
 
  ngOnInit(): void {
  }
  recibirAlumno(alumno:Alumno) {
	this.createEdit = true;
	this.alumno = alumno;
  }

  redirigir() {
	
	this.createEdit = false;		
	
  }


  

  
}
