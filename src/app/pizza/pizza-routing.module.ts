import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaComponent } from './pizza.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PizzaComponent,
    children: [
      {
        path: '',
        component: PizzaListComponent
      },
      {
        path: ':id',
        component: PizzaDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzaRoutingModule { }
