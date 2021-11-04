import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { RouterModule } from '@angular/router';
import { DesignsystemModule } from 'src/app/components/designsystem.module';
import { FormsModule as NgFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TemplateDrivenComponent],
  imports: [
    CommonModule,
    DesignsystemModule,
    NgFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: TemplateDrivenComponent,
      },
    ]),
  ],
})
export class FormsModule {}
