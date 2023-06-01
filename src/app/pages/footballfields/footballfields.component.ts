import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-footballfields',
  templateUrl: 'footballfields.component.html',
  styleUrls: ['footballfields.component.css'],
})
export class Footballfields {
  rawq5x2: string = ' '
  rawmolo: string = ' '
  rawp9c5: string = ' '
  raw4z4z: string = ' '
  rawnf7q: string = ' '
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
