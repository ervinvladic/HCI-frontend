import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fieldcard',
  templateUrl: './fieldcard.component.html',
  styleUrls: ['./fieldcard.component.css']
})
export class FieldCardComponent {
  @Input() imageAlt: string;
  @Input() imageSrc: string;
  @Input() titlePrefix: string;
  @Input() location: string;
  @Input() price: string;
  @Input() description: string;

  raw1w7e: string = ' ';

  constructor() { }
}
