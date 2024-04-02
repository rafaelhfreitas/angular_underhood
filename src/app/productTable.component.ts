import { Component, Input, QueryList, ViewChildren } from "@angular/core";
import { Product } from "./product.model";
import { Model } from "./repository.model";
// import { PaCellColor } from "./cellColor.directive";


@Component({
    selector: "paProductTable",
    templateUrl: "productTable.component.html"
})
export class ProductTableComponent {

    @Input("model")
    dataModel: Model | undefined;

    getProduct(key: number): Product | undefined {
        return this.dataModel?.getProduct(key);
    }

    getProducts(): Product[] | undefined {
        return this.dataModel?.getProducts();
    }

    deleteProduct(key: number) {
        this.dataModel?.deleteProduct(key);
    }
    showTable: boolean = true;


    taxRate: number = 0;
    categoryFilter: string | undefined;
    itemCount: number = 3;


    dateObject: Date = new Date(2020, 1, 20);
    dateString: string = "2020-02-20T00:00:00.000Z";
    dateNumber: number = 1582156800000;


}