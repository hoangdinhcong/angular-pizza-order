import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from 'src/app/core/models/pizza.model';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {

  @Input() dataSource: Observable<Pizza[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
