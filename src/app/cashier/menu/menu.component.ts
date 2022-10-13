import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input('items') items: Item[] = []
  @Output('itemAdded') onAddItem: EventEmitter<Item> = new EventEmitter<Item>();

  constructor() { }

  ngOnInit(): void {
  }

  addItem(item: Item): void {
    this.onAddItem.emit(item)
  }
}
