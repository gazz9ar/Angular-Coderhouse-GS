import { Component } from '@angular/core';
import { faCake, faCartArrowDown, faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-coderhouse';

  public faCartShopping = faCartShopping;
  faCartShopping2 = faCartArrowDown;

  constructor ( ) {
	  this.cambiarIcono();
  }
  public cambiarIcono =  () => {
	  this.faCartShopping = faCake;
  }
}
