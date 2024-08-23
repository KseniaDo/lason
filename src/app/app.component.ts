import { Component } from '@angular/core';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { BannerComponent } from '../components/banner/banner.component';
import { PartnersComponent } from '../components/partners/partners.component';
import { FeaturesComponent } from '../components/features/features.component';
import { DescriptionsComponent } from '../components/descriptions/descriptions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavigationComponent,
    BannerComponent,
    PartnersComponent,
    FeaturesComponent,
    DescriptionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
