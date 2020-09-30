import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-filter',
  templateUrl: './pizza-filter.component.html',
  styleUrls: ['./pizza-filter.component.scss']
})
export class PizzaFilterComponent implements OnInit {

  showFilter = false;

  constructor() { }

  ngOnInit(): void {
    this.showFilter = localStorage.getItem('showFilter') === String(true);
  }

  filterToggle(): void {
    this.showFilter = !this.showFilter;
    localStorage.setItem('showFilter', String(this.showFilter));
  }

}
