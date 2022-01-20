import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestI18nComponent } from './test-i18n.component';

const routes: Routes = [{ path: '', component: TestI18nComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestI18nRoutingModule { }
