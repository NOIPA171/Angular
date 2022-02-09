import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TestGuardRoutingModule } from './test-guard-routing.module';
import { TestGuardComponent } from './test-guard.component';
import { ActivateComponent } from './activate/activate.component';
import { DeactivateComponent } from './deactivate/deactivate.component';

@NgModule({
  declarations: [TestGuardComponent, ActivateComponent, DeactivateComponent],
  imports: [CommonModule, TestGuardRoutingModule, FormsModule],
})
export class TestGuardModule {}
