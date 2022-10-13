import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  @Input() items: SelectedItem[] = []
  @Output() itemsChange: EventEmitter<SelectedItem[]> = new EventEmitter<SelectedItem[]>()
  public total: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  removeItem(itemToBeRemoved: SelectedItem) {
    const itemIndex = this.items.findIndex(({ id }) => id === itemToBeRemoved.id)
    const itemRef = this.items[itemIndex]
    if (itemRef?.amount) {
      this.items = this.items.map((item) => {
        return item.id === itemToBeRemoved.id ? { ...item, amount: item.amount - 1 } : item
      })
    }
    if (itemRef?.amount === 0) {
      this.items = [...this.items.slice(0, itemIndex), ...this.items.slice(itemIndex + 1)]
    }
    this.itemsChange.emit(this.items)
  }

}
