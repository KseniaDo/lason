import { Component } from '@angular/core';
import { ListTextImageComponent } from '../general/list-text-image/list-text-image.component';


@Component({
  selector: 'descriptions-component',
  standalone: true,
  imports: [ ListTextImageComponent ],
  templateUrl: './descriptions.component.html',
  styleUrl: './descriptions.component.scss'
})
export class DescriptionsComponent {}