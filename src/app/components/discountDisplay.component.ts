import { Component, Input } from "@angular/core";
import { DiscountService } from "../common/discount.service";

@Component({
    selector: "paDiscountDisplay",
    template: `<div class="bg-info text-white p-2 my-2">
                    The discount is {{discounter?.discount }}
               </div>`
})
export class PaDiscountDisplayComponent {
    
    
    constructor(public discounter: DiscountService) {}


    // @Input("discounter")
    // discounter?: DiscountService;

}