import { Component } from '@angular/core';
import { CountryCardComponent } from '../country-card/country-card.component';
import { SearchInputsComponent } from '../search-inputs/search-inputs.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CountryCardComponent, SearchInputsComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
