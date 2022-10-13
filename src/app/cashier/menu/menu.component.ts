import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CashierService } from '../cashier.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public items: Observable<Item[]>

  constructor(private cashierService: CashierService) {
    this.items = this.cashierService.items$
  }

  ngOnInit(): void {
  }

  addItem(item: Item): void {
    this.cashierService.addItem(item);
  }
}
