import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-fieldpage',
  templateUrl: 'fieldpage.component.html',
  styleUrls: ['fieldpage.component.css'],
})
export class Fieldpage {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Fieldpage')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Fieldpage',
      },
    ])
  }
}
