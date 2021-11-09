import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateContentComponent } from './template-content/template-content.component';
import { RouterModule } from '@angular/router';
import { MultiSlotComponent } from './multi-slot.component';
import { TemplateRefModule } from 'src/app/directives/template-ref.module';
import { SingleSlotComponent } from './single-slot.component';

@NgModule({
  declarations: [
    TemplateContentComponent,
    MultiSlotComponent,
    SingleSlotComponent,
  ],
  imports: [
    CommonModule,
    TemplateRefModule,
    RouterModule.forChild([{ path: '', component: TemplateContentComponent }]),
  ],
})
export class TemplateContentModule {}
