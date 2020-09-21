import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaItemComponent } from './pizza-item/pizza-item.component';



@NgModule({
  declarations: [PizzaListComponent, PizzaItemComponent],
  imports: [
    CommonModule
  ]
})
export class PizzaSharedModule { }
