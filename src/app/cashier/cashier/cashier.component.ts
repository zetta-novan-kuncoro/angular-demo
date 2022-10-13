import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.scss']
})
export class CashierComponent implements OnInit {
  public items: Item[] = [
    { id: '1', name: 'Cafe Latte', price: 5000 },
    { id: '2', name: 'Vanilla Latte', price: 5000 },
    { id: '3', name: 'Caramel Macchiato', price: 5000 },
    { id: '4', name: 'Americano', price: 5000 },
    { id: '5', name: 'Affogato', price: 5000 },
    { id: '6', name: 'Matcha Latte', price: 5000 },
    { id: '7', name: 'Cappuccino', price: 5000 },
    { id: '8', name: 'Mochaccino', price: 5000 },
    { id: '9', name: 'Japanese Iced Coffee', price: 5000 },
    { id: '10', name: 'Vietnam Drip', price: 5000 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
