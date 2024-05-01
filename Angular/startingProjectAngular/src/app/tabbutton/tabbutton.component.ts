import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabbutton',
  templateUrl: './tabbutton.component.html',
  styleUrls: ['./tabbutton.component.css']
})
export class TabbuttonComponent {
@Input() Label!: string;
}
