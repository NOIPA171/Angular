import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestSSRRoutingModule } from './test-ssr-routing.module';
import { TestSSRComponent } from './test-ssr.component';

@NgModule({
  declarations: [TestSSRComponent],
  imports: [CommonModule, TestSSRRoutingModule],
})
export class TestSSRModule {}
