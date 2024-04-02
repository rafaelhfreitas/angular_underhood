import { Component, Input, QueryList, ViewChildren } from "@angular/core";
import { Product } from "./product.model";
import { Model } from "./repository.model";
// import { Subject } from "rxjs";
import { DiscountService } from "./discount.service";


@Component({
    selector: "paProductTable",
    templateUrl: "productTable.component.html"
})
export class ProductTableComponent {

    discounter: DiscountService = new DiscountService();

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

    // selectMap = {
    //     "Watersports": "stay dry",
    //     "Soccer": "score goals",
    //     "other": "have fun"
    // }
    // numberMap = {
    //     "=1": "one product",
    //     "=2": "two products",
    //     "other": "# products"
    // }

    // numbers: Subject<number> = new Subject<number>();
    
    // ngOnInit() {
    //     let counter = 100;
    //     setInterval(() => {
    //         this.numbers.next(counter += 10)
    //     }, 1000);
    // }

}