import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

import { PizzaRoutingModule } from './pizza-routing.module';
import { PizzaComponent } from './pizza.component';
import { PizzaPageListComponent } from './pizza-page-list/pizza-page-list.component';
import { PizzaPageDetailComponent } from './pizza-page-detail/pizza-page-detail.component';
import { PizzaSharedModule } from '../shared/components/pizza/pizza-shared.module';

@NgModule({
  declarations: [PizzaComponent, PizzaPageListComponent, PizzaPageDetailComponent],
  imports: [
    CommonModule,
    PizzaSharedModule,
    MatDividerModule,

    PizzaRoutingModule
  ]
})
export class PizzaModule { }
