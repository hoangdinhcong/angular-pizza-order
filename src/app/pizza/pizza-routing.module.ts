import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaComponent } from './pizza.component';
import { PizzaPageListComponent } from './pizza-page-list/pizza-page-list.component';
import { PizzaPageDetailComponent } from './pizza-page-detail/pizza-page-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PizzaComponent,
    children: [
      {
        path: '',
        component: PizzaPageListComponent
      },
      // {
      //   path: ':id',
      //   component: PizzaPageDetailComponent
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzaRoutingModule { }
