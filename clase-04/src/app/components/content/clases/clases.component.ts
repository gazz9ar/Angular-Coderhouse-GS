import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Clase } from '../shared/interfaces/Clase';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ClasesComponent implements OnInit {


  public clases:Clase[] = [];  
  constructor() { 
	  this.clases.push(
		  {
			  id:1,
			  name:'Prisoner',
			  attributeBased:'Int',
			  img:'../../../../assets/images/elden-ring-prisoner-class.webp',
			  description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aperiam, eos mollitia deserunt
			  voluptate temporibus asperiores nostrum saepe! Autem itaque totam optio a, molestias ipsum provident
			  iste sequi enim fuga!`,
			  seleccionado:false,
			  like:false,
		  },
		  {
			id:2,
			name:'Vagabond',
			attributeBased:'Dex',
			img:'../../../../assets/images/vagabond.jpg',
			description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aperiam, eos mollitia deserunt
			voluptate temporibus asperiores nostrum saepe! Autem itaque totam optio a, molestias ipsum provident
			iste sequi enim fuga!`,
			seleccionado:false,
			like:false,
		}
	  )
  }

  ngOnInit(): void {
  }
  seleccionar(event:any) {
	event = true;
  }
  likeClass = (idClase:number) => {

	for (const clase of this.clases) {
		if (clase.id == idClase) {
			if (clase.like) {
				clase.like = false;
			} else {
				clase.like = true;
			}		
		}
	}
  }  

}
