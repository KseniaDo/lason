import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'button-get-demo-component',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './button-get-demo.component.html',
  styleUrl: './button-get-demo.component.scss'
})
export class ButtonGetDemoComponent {
  @Input() classList='';
}