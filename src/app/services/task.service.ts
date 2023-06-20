import { Injectable } from '@angular/core';
import { Task } from '../models/Task';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string = 'http://localhost:5100/tasks';

  constructor(private http: HttpClient) { }

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  public addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiUrl}`, task, this.getHttpOption());
  }

  public updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task, this.getHttpOption());
  }

  public deleteTask(task: Task): Observable<Task> {
    return this.http.delete<Task>(`${this.apiUrl}/${task.id}`);
  }

  private getHttpOption(): {headers: HttpHeaders} {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }
}