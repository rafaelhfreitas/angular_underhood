import {
    Directive, SimpleChanges, ViewContainerRef, TemplateRef, Input
} from "@angular/core";


@Directive({
    selector: "[paIf]"
})
export class PaStructureDirective {

    constructor(private container: ViewContainerRef,
        private template: TemplateRef<Object>) { }

    @Input("paIf")
    expressionResult: boolean | undefined;

    ngOnChanges(changes: SimpleChanges) {
        console.log('Template: ', this.template);
        console.log('Changes: ', changes);

        let change = changes["expressionResult"];
        if (!change.isFirstChange() && !change.currentValue) {
            this.container.clear();
        } else if (change.currentValue) {
            this.container.createEmbeddedView(this.template);
        }
    }
}