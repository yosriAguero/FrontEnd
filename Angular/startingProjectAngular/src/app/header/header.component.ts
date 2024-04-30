import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

  private genRandomInt(max: number) {
    return Math.floor(Math.random() * (max + 1));
  }

  public Description = this.reactDescriptions[this.genRandomInt(2)];
  imgReact = '../assets/react-core-concepts.png';

}
