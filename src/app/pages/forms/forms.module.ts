import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { RouterModule } from '@angular/router';
import { DesignsystemModule } from 'src/app/components/designsystem.module';
import {
  FormsModule as NgFormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ReactiveComponent } from './reactive/reactive.component';

@NgModule({
  declarations: [TemplateDrivenComponent, ReactiveComponent],
  imports: [
    CommonModule,
    DesignsystemModule,
    NgFormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: ReactiveComponent },
      {
        path: 'template',
        component: TemplateDrivenComponent,
      },
    ]),
  ],
})
export class FormsModule {}
