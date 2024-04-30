import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detailcore',
  templateUrl: './detailcore.component.html',
  styleUrls: ['./detailcore.component.css']
})
export class DetailcoreComponent {
@Input() Concept: any;
}
