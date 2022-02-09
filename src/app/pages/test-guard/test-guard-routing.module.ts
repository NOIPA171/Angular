import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateComponent } from './activate/activate.component';
import { DeactivateComponent } from './deactivate/deactivate.component';
import { TestGuardComponent } from './test-guard.component';

import { CanactivateGuard } from './guards/canactivate.guard';
import { CandeactivateGuard } from './guards/candeactivate.guard';

const routes: Routes = [
  { path: '', component: TestGuardComponent },
  {
    path: 'activate',
    component: ActivateComponent,
    canActivate: [CanactivateGuard],
  },
  {
    path: 'deactivate',
    component: DeactivateComponent,
    canDeactivate: [CandeactivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestGuardRoutingModule {}
