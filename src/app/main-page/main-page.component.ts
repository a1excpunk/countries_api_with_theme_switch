import { Component } from '@angular/core';
import { CountryCardComponent } from '../country-card/country-card.component';
import { SearchInputsComponent } from '../search-inputs/search-inputs.component';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CountryCardComponent, SearchInputsComponent, NgFor, CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  detailsPage() {
    console.log('asdrgadsr');

  }
}
