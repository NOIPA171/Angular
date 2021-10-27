import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  // call this on click
  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  // if we wanna do anything when click happens, subscribe to this
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
