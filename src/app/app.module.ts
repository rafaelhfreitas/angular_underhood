import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductComponent } from './component';
import { FormsModule } from '@angular/forms';
// import { PaAttrDirective } from './attr.directive';
// import { PaModel } from './twoway-directive';
// import { PaStructureDirective } from './structural.directive';
// import { PaIteratorDirective } from './iterator.directive';
// import { PaCellColor } from './cellColor.directive';
// import { PaCellColorSwitcher } from './cellCollorSwitcher.directive';
import { ProductFormComponent } from './productForm.component';
import { ProductTableComponent } from './productTable.component';3
import { PaToggleView } from './toggleView.component';
// import { PaAddTaxPipe } from './addTax.pipe';
// import { PaCategoryFilterPipe } from './categoryFilter.pipe';


import { LOCALE_ID } from '@angular/core';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

import { PaDiscountDisplayComponent } from './discountDisplay.component';
import { PaDiscountEditorComponent } from './discountEditor.component';

// import { DiscountService } from './discount.service';
// import { PaDiscountPipe } from './discount.pipe';
// import { PaDiscountAmountDirective } from './discountAmount.directive';
// import { SimpleDataSource } from './datasource.model';
// import { Model } from './repository.model';
// import { LogService, LOG_SERVICE, SpecialLogService, LogLevel , LOG_LEVEL} from './log.service';
// import { VALUE_SERVICE ,PaDisplayValueDirective } from './valueDisplay.directive';

import { ModelModule } from './model/model.module';
import { CommonModule } from './common/common.module';


// let logger = new LogService();
// logger.minimumLevel = LogLevel.DEBUG;

registerLocaleData(localeFr);


@NgModule({
  declarations: [
    ProductComponent,
    ProductFormComponent,
    ProductTableComponent,
    PaToggleView,
    PaDiscountDisplayComponent,
    PaDiscountEditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ModelModule,
    CommonModule
  ],
  bootstrap: [ProductTableComponent,ProductFormComponent ]
})
export class AppModule { }

