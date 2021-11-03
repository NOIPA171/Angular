import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { IndexComponent } from './pages/index/index.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'task-tracker',
    loadChildren: () =>
      import('./pages/task-tracker/task-tracker.module').then(
        (mod) => mod.TaskTrackerModule
      ),
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
