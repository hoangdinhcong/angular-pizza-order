import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaItemComponent } from './pizza-item/pizza-item.component';
import { PizzaFilterComponent } from './pizza-filter/pizza-filter.component';


const material = [
  MatCardModule
];


@NgModule({
  declarations: [PizzaListComponent, PizzaFilterComponent, PizzaItemComponent],
  imports: [
    CommonModule,
    ...material,
  ],
  exports: [PizzaListComponent, PizzaFilterComponent, PizzaItemComponent]
})
export class PizzaSharedModule { }
