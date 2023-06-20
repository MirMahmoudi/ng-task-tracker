import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/models/Task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  public text: string = '';
  public day: string = '';
  public reminder: boolean = false;
  public warning = { text: '', day: '' };
  public showAddTask: boolean = false;
  public subscription: Subscription;
  @Output() addTaskEmitter: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggleUiService()
                                      .subscribe(value => this.showAddTask = value);
  }

  public onSubmit(): void {
    this.warning.text = this.text == '' ? 'Task should has a title!' : '';
    this.warning.day = this.day == '' ? 'Task should has a Day & Time option!' : '';

    if(this.warning.text !== '' || this.warning.day !== '')
      throw new Error('The fields should be filled!');

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.addTaskEmitter.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
    this.warning = {text: '', day: ''};
  }
}
