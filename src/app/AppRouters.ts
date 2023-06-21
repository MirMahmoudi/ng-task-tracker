import { Routes } from "@angular/router";

import { TasksComponent } from "./components/tasks/tasks.component";
import { AboutComponent } from "./components/about/about.component";

export class AppRouters {
    public static appRoutes: Routes = [
        {path: '', component: TasksComponent},
        {path: 'about', component: AboutComponent}
    ]
}