import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public title: string = 'Task Tracker';
  public showAddTask: boolean = false;
  public subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggleUiService()
                                .subscribe(value => this.showAddTask = value);
  }

  public toggleAddTask(): void {
    this.uiService.toggleAddTaskUiService();
  }
}
