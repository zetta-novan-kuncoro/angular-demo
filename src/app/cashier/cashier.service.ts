import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CashierService {
  private itemsSource: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([
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
  ]);
  private selectedItemsSource: BehaviorSubject<SelectedItem[]> = new BehaviorSubject<SelectedItem[]>([]);
  public items$ = this.itemsSource.asObservable();
  public selectedItems$ = this.selectedItemsSource.asObservable();

  constructor() {}

  addItem(item: Item) {
    const selectedItems = this.selectedItemsSource.value;
    const duplicatedItemIndex = selectedItems.findIndex(
      ({ id }) => id === item.id
    );
    if (duplicatedItemIndex >= 0) {
      this.selectedItemsSource.next(
        selectedItems.map((selectedItem) => {
          return selectedItem.id === item.id
            ? { ...selectedItem, amount: selectedItem.amount + 1 }
            : selectedItem;
        })
      );
    } else {
      this.selectedItemsSource.next([...selectedItems, { ...item, amount: 1 }]);
    }
  }

  removeItem(itemToBeRemoved: SelectedItem) {
    const selectedItems = this.selectedItemsSource.value;
    const itemIndex = selectedItems.findIndex(
      ({ id }) => id === itemToBeRemoved.id
    );
    const itemRef = selectedItems[itemIndex];
    if (itemRef?.amount) {
      this.selectedItemsSource.next(
        selectedItems.map((item) => {
          return item.id === itemToBeRemoved.id
            ? { ...item, amount: item.amount - 1 }
            : item;
        })
      );
    }
    if (itemRef?.amount === 1) {
      this.selectedItemsSource.next([
        ...selectedItems.slice(0, itemIndex),
        ...selectedItems.slice(itemIndex + 1),
      ]);
    }
  }
}
