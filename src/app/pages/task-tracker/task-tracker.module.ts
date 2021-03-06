import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DesignsystemModule } from 'src/app/components/designsystem.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './components/tasks/tasks.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FooterComponent } from './components/footer/footer.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskTrackerComponent } from './task-tracker/task-tracker.component';

@NgModule({
  declarations: [
    TasksComponent,
    HeaderComponent,
    TaskItemComponent,
    AddTaskComponent,
    FooterComponent,
    TaskTrackerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TaskTrackerComponent }]),
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    DesignsystemModule,
  ],
})
export class TaskTrackerModule {}
