import { Component } from '@angular/core';

@Component({
  selector: 'menu-component',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
    navigationLinks = [
        {id: 0, link: 'Features'},
        {id: 1, link: 'Contact'},
        {id: 2, link: 'About us'},
        {id: 3, link: 'Careers'},
    ];
}