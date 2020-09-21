import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from '../../../../core/models/pizza.model';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.scss']
})
export class PizzaItemComponent implements OnInit {

  @Input() pizza: Pizza;

  constructor() { }

  ngOnInit(): void {
  }

}
