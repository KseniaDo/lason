import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-text-image-component',
  standalone: true,
  templateUrl: './list-text-image.component.html',
  styleUrl: './list-text-image.component.scss'
})
export class ListTextImageComponent {
    @Input() colorHEX = '#ffffff';
    @Input() itemHeader = '';
    @Input() itemText = '';
    @Input() classList = '';
}