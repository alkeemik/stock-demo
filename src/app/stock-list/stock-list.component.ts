import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Stock } from '../stock/stock';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.sass']
})
export class StockListComponent implements OnInit {
  public stocks : Stock[];

  constructor(
    private stockService: StockService
  ) { }

  ngOnInit(): void {
    this.stocks = this.stockService.getStocks();
  }

  getClass(stock : Stock) {
    if (stock.currentPrice == stock.price) {
      return '';
    }

    return stock.currentPrice < stock.price ? 'red' : 'green'
  }

}
