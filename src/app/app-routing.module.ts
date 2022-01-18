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
  {
    path: 'template-content',
    loadChildren: () =>
      import('./pages/template-content/template-content.module').then(
        (mod) => mod.TemplateContentModule
      ),
  },
  {
    path: 'routing',
    loadChildren: () =>
      import('./pages/routing/routing.module').then((m) => m.RoutingModule),
  },
  { path: 'testSSR', loadChildren: () => import('./pages/test-ssr/test-ssr.module').then(m => m.TestSSRModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      //{ enableTracing: true } // help debug
      {
        initialNavigation: 'enabled',
      }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
