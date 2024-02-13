import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-inputs',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './search-inputs.component.html',
  styleUrl: './search-inputs.component.scss'
})
export class SearchInputsComponent {
  regionPlaceholder: string = "Filter by Region"
  regions = ["test 1", "test 2", "test 3", "test 4", "test 5"];
  regionSelectorOpen: boolean = false;
  selectRegion(value: string) {
    this.regionPlaceholder = value;
  }
  toggleRegionSelector() {
    this.regionSelectorOpen = !this.regionSelectorOpen;
  }
}
