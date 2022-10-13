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
  public selectedItems: SelectedItem[] = []

  constructor() { }

  ngOnInit(): void {
  }

  addItem(item: Item) {
    const duplicatedItemIndex = this.selectedItems.findIndex(({ id }) => id === item.id)
    if (duplicatedItemIndex >= 0) {
      this.selectedItems = this.selectedItems.map((selectedItem) => {
        return selectedItem.id === item.id ? { ...selectedItem, amount: selectedItem.amount + 1 } : selectedItem
      })
    } else {
      this.selectedItems = [...this.selectedItems, { ...item, amount: 1 }]
    }
  }

}
