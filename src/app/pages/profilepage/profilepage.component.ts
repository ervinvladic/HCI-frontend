import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-profilepage',
  templateUrl: 'profilepage.component.html',
  styleUrls: ['profilepage.component.css'],
})
export class Profilepage {
  constructor(private title: Title) {
    this.title.setTitle('Profile')
  }
}
