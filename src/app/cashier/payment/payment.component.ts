import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  @Input() items: SelectedItem[] = []
  @Output() itemsChange: EventEmitter<SelectedItem[]> = new EventEmitter<SelectedItem[]>()

  constructor() { }

  ngOnInit(): void {
  }

  removeItem(item: SelectedItem) {
    const itemIndex = this.items.findIndex(({ id }) => id === item.id)
    const itemRef = this.items[itemIndex]
    if (itemRef?.amount) {
      itemRef.amount -= 1
    }
    if (itemRef?.amount === 0) {
      this.items.splice(itemIndex, 1)
    }
    this.itemsChange.emit(this.items)
  }

}
