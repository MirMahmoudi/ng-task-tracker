import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task: Task = { id: 0, text: '', day: '', reminder: false };
  @Output() onToggleEmitter: EventEmitter<Task> = new EventEmitter();
  @Output() onDeleteEmitter: EventEmitter<Task> = new EventEmitter();

  public onToggle(task: Task): void {
    this.onToggleEmitter.emit(task);
  }

  public onDelete(task: Task): void {
    this.onDeleteEmitter.emit(task);
  }
}
