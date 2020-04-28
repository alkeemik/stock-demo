import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-stock-demo',
  templateUrl: './stock-demo.component.html',
  styleUrls: ['./stock-demo.component.sass']
})
export class StockDemoComponent implements OnInit {
  public day : number = 1;
  private currentDate : Date = new Date;

  constructor(
    private stockService : StockService
  ) { }

  ngOnInit(): void {
  }

  nextDay(): void {
    this.day++;
    this.stockService.updateItems();
  }

  getComputedDay() {
    let formattedDate = new Date();
    formattedDate.setDate(this.currentDate.getDate() + this.day - 1);
    return formattedDate;
  }

}
