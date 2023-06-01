import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-footballfields',
  templateUrl: 'footballfields.component.html',
  styleUrls: ['footballfields.component.css'],
})
export class Footballfields {
  constructor(private title: Title) {
    this.title.setTitle('Football fields')
  }
}
