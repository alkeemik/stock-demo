import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export class Stock {
    public price : number;
    public currentPrice : number;
    public priceChange : number;
    public priceChangePercentage : number;
    public name : string;
    public symbol : string;

    public parseFromData(data : []) {
        let dataMissing : boolean = false;
        for (let validate of ['price', 'name', 'symbol']) {
            if (data[validate] === undefined || data[validate] == '') {
                dataMissing = true;
                break;
            }
        }

        if (data['price']) this.price = parseFloat(data['price']);
        if (data['name']) this.name = data['name'].trim();
        if (data['symbol']) this.symbol = data['symbol'].trim();

        if (this.price) {
            this.currentPrice = this.price;
        } else {
            dataMissing = true;
        }

        return !dataMissing;
    }

    public updatePriceByPercentage(percentage : number) {
        if (percentage == 0)  return;
        
        const change = (100 + percentage) / 100;

        this.currentPrice *= change;
        this.priceChange = Math.abs(this.currentPrice - this.price);
        this.priceChangePercentage = Math.abs((1 - this.currentPrice / this.price) * 100);
    }
}
