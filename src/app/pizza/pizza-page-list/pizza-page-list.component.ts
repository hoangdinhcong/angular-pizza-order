import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from 'src/app/core/models/pizza.model';
import { PizzaService } from '../../core/services/pizza.service';

@Component({
  selector: 'app-pizza-page-list',
  templateUrl: './pizza-page-list.component.html',
  styleUrls: ['./pizza-page-list.component.scss']
})
export class PizzaPageListComponent implements OnInit {

  pizzas$: Observable<Pizza[]>;

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.pizzas$ = this.pizzaService.getList();
    console.log('yo');
  }

}
