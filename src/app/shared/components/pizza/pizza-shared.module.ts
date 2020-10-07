import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { FlexLayoutModule } from '@angular/flex-layout';

import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaItemComponent } from './pizza-item/pizza-item.component';
import { PizzaFilterComponent } from './pizza-filter/pizza-filter.component';


const Material = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
];


@NgModule({
  declarations: [PizzaListComponent, PizzaFilterComponent, PizzaItemComponent],
  imports: [
    CommonModule,
    ...Material,
    FlexLayoutModule
  ],
  exports: [PizzaListComponent, PizzaFilterComponent, PizzaItemComponent, ...Material]
})
export class PizzaSharedModule {
}
