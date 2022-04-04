import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


let mm = [
	MatSidenavModule,
	MatIconModule,
	MatButtonModule,
	MatCardModule,
	MatInputModule,
	MatDatepickerModule,	
	MatNativeDateModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
	[...mm]
  ]
}) 
export class MaterialModule { }
