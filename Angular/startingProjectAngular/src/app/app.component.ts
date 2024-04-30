import { Component, Input } from '@angular/core';
// import {coreconcepts} from './data.js';

declare function getCORE_CONCEPTS(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
image: any;



GetConcept(arg0: number) {

return getCORE_CONCEPTS()[arg0];
}



  title = 'startingProjectAngular';
}
