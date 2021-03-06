import { Component, OnInit } from '@angular/core';
import { Task } from '../../../../interfaces/Task';
import { TaskService } from '../../../../services/task.service';
import { makeStateKey, TransferState } from '@angular/platform-browser';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(
    private taskService: TaskService,
    private transferState: TransferState
  ) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((res) => (this.tasks = res));
  }
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }
  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((tsk) => {
      this.tasks.push(tsk);
    });
  }
}
