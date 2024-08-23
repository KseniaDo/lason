import { Component } from '@angular/core';
import { ButtonComponent } from '../general/button/button.component';
import { MenuComponent } from '../general/menu/menu.component';

@Component({
  selector: 'navigation-component',
  standalone: true,
  imports: [
    ButtonComponent,
    MenuComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  navigationLinks = [
    {id: 0, link: 'Features'},
    {id: 1, link: 'Contact'},
    {id: 2, link: 'About us'},
    {id: 3, link: 'Careers'},
  ];
}