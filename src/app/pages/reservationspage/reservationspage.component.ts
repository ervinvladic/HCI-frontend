import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-reservationspage',
  templateUrl: 'reservationspage.component.html',
  styleUrls: ['reservationspage.component.css'],
})
export class Reservationspage {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
