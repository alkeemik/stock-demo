import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stock } from '../models/stock/stock';


@Injectable({
  providedIn: 'root'
})
export class StockService {
  stockItems: Stock[] = [];
  constructor(
    private http: HttpClient
  ) {}

  updateItems() {
    for(let stockItem of this.stockItems) {
      const change = (Math.random() >= 0.5) ? 10 : -10;
      stockItem.updatePriceByPercentage(change);
    }
  }

  getStocks() {
    const itemsFromOutside = this.http.get('https://staging-api.brainbase.com/stocks.php');
    itemsFromOutside.forEach(items => {
      for(let index in items) {
        let stockItem = new Stock();
        if (stockItem.parseFromData(items[index])) {
          this.stockItems.push(stockItem);
        }
      }
    })

    return this.stockItems;
    }
 }
