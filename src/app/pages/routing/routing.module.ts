import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingRoutingModule } from './routing-routing.module';
import { RoutingComponent } from './routing.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    RoutingComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RoutingRoutingModule
  ]
})
export class RoutingModule { }
