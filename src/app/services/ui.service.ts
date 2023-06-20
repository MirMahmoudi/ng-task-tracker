import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject: any = new Subject<any>();

  constructor() { }

  public toggleAddTaskUiService(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  public onToggleUiService(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
