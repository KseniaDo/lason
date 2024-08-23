import { Component } from '@angular/core';
import { ButtonComponent } from '../general/button/button.component';
import { ButtonGetDemoComponent } from '../general/button-get-demo/button-get-demo.component';

@Component({
  selector: 'banner-component',
  standalone: true,
  imports: [ ButtonComponent, ButtonGetDemoComponent ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {}