import { Product } from "./product.model";
import { SimpleDataSource } from "./datasource.model";
import { Injectable } from "@angular/core";


@Injectable()
export class Model {
    // private dataSource: SimpleDataSource;
    private products: Product[];
    private locator = (p: Product, id: number | any) => p.id == id;

    constructor(private dataSource: SimpleDataSource) {
        // this.dataSource = new SimpleDataSource();
        this.products = new Array<Product>();
        this.dataSource.getData().forEach(p => {

            console.log(p);
            this.products.push(p);
        });
    }

    getProducts(): Product[] {
        return this.products;
    }
    
    getProduct(id: number): Product | undefined {
        return this.products.find(p => this.locator(p, id));
    }

    saveProduct(product: Product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateID();
            this.products.push(product);
        } else {
            let index = this.products.findIndex(p => this.locator(p, product.id));
            this.products.splice(index, 1, product);
        }
    }

    deleteProduct(id: number) {
        let index = this.products.findIndex(p => this.locator(p, id));
        if (index > -1) {
            this.products.splice(index, 1);
        }
    }
    private generateID(): number {
        let candidate = 100;
        while (this.getProduct(candidate) != null) {
            candidate++;
        }
        return candidate;
    }

    swapProduct(){
        let p = this.products.shift();
        console.log(p);
        if (p != null) {
            this.products.push(new Product(p.id, p.name, p.category, p.price));
        }
    }
}