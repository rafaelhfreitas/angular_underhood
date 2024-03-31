import { Directive, ElementRef, Attribute } from "@angular/core";


@Directive({
    selector: "[pa-attr]",
})
export class PaAttrDirective {


    // constructor(element: ElementRef) {
    //     element.nativeElement.classList.add("table-success", "fw-bold");
    // }

    constructor(element: ElementRef, @Attribute("pa-attr-class") bgClass: string) {
        console.log(bgClass);
        element.nativeElement.classList.add(bgClass || "table-success", "fw-bold");   
    }
}    