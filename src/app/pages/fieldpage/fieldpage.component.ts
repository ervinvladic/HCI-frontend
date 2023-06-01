import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-fieldpage',
  templateUrl: 'fieldpage.component.html',
  styleUrls: ['fieldpage.component.css'],
})
export class Fieldpage {
  raw0kh2: string = ' '
  rawirsj: string = ' '
  rawhs49: string = ' '
  rawf4kw: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Exemplary Revolving Lark')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Exemplary Revolving Lark',
      },
    ])
  }
}
