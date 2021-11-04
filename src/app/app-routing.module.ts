import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { IndexComponent } from './pages/index/index.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'test',
    loadChildren: () =>
      import('./pages/test/test.module').then((mod) => mod.TestModule),
  },
  {
    path: 'task-tracker',
    loadChildren: () =>
      import('./pages/task-tracker/task-tracker.module').then(
        (mod) => mod.TaskTrackerModule
      ),
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('./pages/forms/forms.module').then((mod) => mod.FormsModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
      //{ enableTracing: true } // help debug
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
