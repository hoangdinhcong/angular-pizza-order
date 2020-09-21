import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzaRoutingModule } from './pizza-routing.module';
import { PizzaComponent } from './pizza.component';
import { PizzaService } from '../core/services/pizza.service';
import { PizzaItemComponent } from '../shared/components/pizza/pizza-item/pizza-item.component';


@NgModule({
  declarations: [PizzaComponent, PizzaItemComponent],
  imports: [
    CommonModule,
    PizzaRoutingModule
  ],
  providers: [PizzaService]
})
export class PizzaModule { }
