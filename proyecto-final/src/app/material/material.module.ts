import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';



let mm = [
	MatSidenavModule
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
