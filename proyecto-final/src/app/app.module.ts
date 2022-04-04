import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAlumnoComponent } from './admin/components/add-alumno/add-alumno.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './admin/shared/components/sidenav.component';
import { AdminComponent } from './admin/components/admin.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    AddAlumnoComponent,
    AdminComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	MaterialModule,
	ReactiveFormsModule,
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
