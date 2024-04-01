import { Directive, Input, SimpleChanges, ContentChildren, QueryList } from "@angular/core";
import { PaCellColor } from "./cellColor.directive";


@Directive({
    selector: "table"
})
export class PaCellColorSwitcher {

    @Input("paCellDarkColor")
    modelProperty: Boolean | undefined;

    @ContentChildren(PaCellColor, { descendants: true })
    contentChildren: QueryList<PaCellColor> | undefined;

    ngOnChanges(changes: SimpleChanges) {
        this.updateContentChildren(changes["modelProperty"].currentValue);
    }
    private updateContentChildren(dark: Boolean) {
        if (this.contentChildren != null && dark != undefined) {
            this.contentChildren.forEach((child, index) => {
                child.setColor(index % 2 ? dark : !dark);
            });
        }
    }
}