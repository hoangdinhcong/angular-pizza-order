import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {PizzaListComponent} from './pizza-list/pizza-list.component';
import {PizzaItemComponent} from './pizza-item/pizza-item.component';
import {PizzaFilterComponent} from './pizza-filter/pizza-filter.component';


const Material = [
  MatCardModule,
  MatButtonModule
];


@NgModule({
  declarations: [PizzaListComponent, PizzaFilterComponent, PizzaItemComponent],
  imports: [
    CommonModule,
    ...Material,
  ],
  exports: [PizzaListComponent, PizzaFilterComponent, PizzaItemComponent]
})
export class PizzaSharedModule {
}
