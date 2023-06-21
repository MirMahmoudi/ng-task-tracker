import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private uiService: UiService,
    private router: Router) {
    this.subscription = this.uiService.onToggleUiService()
                                .subscribe(value => this.showAddTask = value);
  }

  public toggleAddTask(): void {
    this.uiService.toggleAddTaskUiService();
  }

  public hasRout(route: string) {
    return this.router.url === route;
  }
}
