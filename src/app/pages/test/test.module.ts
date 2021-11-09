import { NgModule } from '@angular/core';
import { DesignsystemModule } from 'src/app/components/designsystem.module';

import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { SetterComponent } from './setter/setter.component';
import { LocalVarComponent } from './local-var.component';

@NgModule({
  declarations: [
    TestComponent,
    ContentComponent,
    SetterComponent,
    LocalVarComponent,
  ],
  imports: [
    CommonModule,
    DesignsystemModule,
    RouterModule.forChild([
      {
        path: '',
        component: TestComponent,
      },
    ]),
  ],
})
export class TestModule {}
