import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sport-category',
  templateUrl: './sport-category.component.html',
  styleUrls: ['./sport-category.component.css']
})
export class SportCategoryComponent {
  @Input() alt: string;
  @Input() imageSrc: string;
  @Input() title: string;
  @Input() courtCount: string;
}
