import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITask } from '../interfaces/ITask';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private readonly API = 'https://apex-todo-list-server.herokuapp.com/tasks';

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<ITask[]>(this.API);
  }

  show(id: number) {
    return this.http.get<ITask>(`${this.API}/${id}`);
  }

  create(title: string) {
    return this.http.post(this.API, { title });
  }

  remove(id: number) {
    return this.http.delete(`${this.API}/${id}`);
  }

  changeTaskComplete(id: number, complete: boolean) {
    return this.http.patch(`${this.API}/${id}`, { complete });
  }

  removeAll() {
    return this.http.delete(`${this.API}-all`);
  }
}
