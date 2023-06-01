import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { NavbarComponent } from '../../components/navbar/navbar.component';


@Component({
  selector: 'app-homepage',
  templateUrl: 'homepage.component.html',
  styleUrls: ['homepage.component.css'],
})
export class Homepage {
  rawm99n: string = ' '
  raw1w7e: string = ' '
  raw56qa: string = ' '
  rawynae: string = ' '
  raw00b7: string = ' '
  rawctqt: string = ' '
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
