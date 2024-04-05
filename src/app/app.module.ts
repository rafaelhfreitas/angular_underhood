import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductComponent } from './component';
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './components/productForm.component';
import { ProductTableComponent } from './components/productTable.component';3

import { LOCALE_ID } from '@angular/core';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';


import { ModelModule } from './model/model.module';
import { CommonModule } from './common/common.module';
import { ComponentsModule } from './components/components.module';


registerLocaleData(localeFr);


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ModelModule,
    CommonModule,
    ComponentsModule
  ],
  bootstrap: [ProductTableComponent,ProductFormComponent ]
})
export class AppModule { }

