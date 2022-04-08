import { Component, OnInit, ViewChild, enableProdMode } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { AlumnosService } from '../../services/alumnos.service';
import { Alumno } from '../../shared/models/Alumno';




@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'fechaNacimiento', 'email'];
  alumnos:Alumno[] = [];
  @ViewChild(MatTable,{static:true}) table!: MatTable<Alumno>;
  constructor(private alumnosService:AlumnosService) { 
	this.alumnos = this.alumnosService.getAlumnos();
	
  }
 
  ngAfterViewInit(): void {
	this.table.renderRows();
  }
  ngOnInit(): void {
	  console.log(new Date(this.alumnos[0].fechaNacimiento));
  }
  addAlumno(alumno:Alumno) {
    this.alumnosService.createUpdateAlumno(alumno);
  }

}
