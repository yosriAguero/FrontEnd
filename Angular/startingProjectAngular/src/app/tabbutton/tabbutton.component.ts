import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabbutton',
  templateUrl: './tabbutton.component.html',
  styleUrls: ['./tabbutton.component.css']
})
export class TabbuttonComponent {
@Input() Label!: string;
@Output() selected : EventEmitter<string> = new EventEmitter<string>();
public clickHandler()
{
  this.selected.emit(this.Label);
}

}
