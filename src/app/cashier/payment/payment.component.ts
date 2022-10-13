import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CashierService } from '../cashier.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  public items: Observable<SelectedItem[]>
  public total: Observable<number>

  constructor(private cashierService: CashierService) {
    this.items = this.cashierService.selectedItems$
    this.total = this.cashierService.selectedItems$.pipe(
      map((items) => items.reduce((total, item) => total += item.amount * item.price, 0))
    )
  }

  ngOnInit(): void {
  }

  removeItem(item: SelectedItem) {
    this.cashierService.removeItem(item)
  }
}
