import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { AlumnosService } from '../../services/alumnos.service';
import { Alumno } from '../../shared/models/Alumno';




@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'fechaNacimiento', 'email','acciones'];
  alumno:Alumno = {id:0,nombre:'',apellido:'',fechaNacimiento:'',email:''}; 
  alumnos:Alumno[] = [];

  @Output() alumnoEnviarOutput = new EventEmitter<any>();
  @ViewChild(MatTable,{static:true}) table!: MatTable<Alumno>;
  constructor(private alumnosService:AlumnosService) { 
	this.alumnos = this.alumnosService.getAlumnos();	
  }
 
  ngAfterViewInit(): void {
	this.table.renderRows();
  }
  ngOnInit(): void {
	  
  } 
  updateAlumno(alumno:any,isUpdate:boolean){
	  // enviar el alumno a add-alumno component
	 if (isUpdate) {
		this.alumnoEnviarOutput.emit(alumno);
	 } else {
		alumno.id = 0;
		this.alumnoEnviarOutput.emit(alumno);
	 }
	
  }
  deleteAlumno(idAlumno:number) {

		this.alumnosService.deleteAlumno(idAlumno);
  }


}
