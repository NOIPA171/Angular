import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestI18nRoutingModule } from './test-i18n-routing.module';
import { TestI18nComponent } from './test-i18n.component';


@NgModule({
  declarations: [
    TestI18nComponent
  ],
  imports: [
    CommonModule,
    TestI18nRoutingModule
  ]
})
export class TestI18nModule { }
