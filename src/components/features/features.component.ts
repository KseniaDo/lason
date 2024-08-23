import { Component } from '@angular/core';
import { ItemBackgroundComponent } from '../general/item-background/item-background.component';


@Component({
  selector: 'features-component',
  standalone: true,
  imports: [ ItemBackgroundComponent ],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {}