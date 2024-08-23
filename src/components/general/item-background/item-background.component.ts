import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-background-component',
  standalone: true,
  templateUrl: './item-background.component.html',
  styleUrl: './item-background.component.scss'
})
export class ItemBackgroundComponent {
    @Input() colorHEX = '#ffffff';
    @Input() itemHeader = '';
    @Input() itemText = '';
}