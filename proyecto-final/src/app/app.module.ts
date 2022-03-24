import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';
import { ClasesComponent } from './components/content/clases/clases.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    ContentComponent,
    ClasesComponent,	
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FontAwesomeModule,
	BrowserAnimationsModule,
	MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
	CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
