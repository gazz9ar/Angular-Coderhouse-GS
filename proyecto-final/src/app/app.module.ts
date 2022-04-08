import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAlumnoComponent } from './admin/components/alumnos/add-alumno/add-alumno.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './admin/shared/components/sidenav.component';
import { AdminComponent } from './admin/components/admin.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnosComponent } from './admin/components/alumnos/alumnos.component';
import { NombreApellidoPipe } from './admin/shared/pipes/nombre-apellido.pipe';
import { EdadPipe } from './admin/shared/pipes/edad.pipe';
import { MAT_DATE_LOCALE } from '@angular/material/core';




@NgModule({
  declarations: [
    AppComponent,
    AddAlumnoComponent,
    AdminComponent,
    SidenavComponent,
    AlumnosComponent,
    NombreApellidoPipe,
    EdadPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	MaterialModule,
	ReactiveFormsModule,
	
  ],
  providers:[
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
