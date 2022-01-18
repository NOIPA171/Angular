import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestSSRComponent } from './test-ssr.component';

const routes: Routes = [{ path: '', component: TestSSRComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestSSRRoutingModule { }
