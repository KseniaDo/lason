import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-component',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text = '';
  @Input() classList='';
}