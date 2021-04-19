import { Component } from '@angular/core';
import { ITask } from './interfaces/ITask';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: ITask[] = [];
  sidebarOpen = false;

  addTask = (title: string) => {
    this.tasks.push({
      id: Date.now(),
      title,
      completed: false,
    });
  };

  completeTask(id: number) {
    const index = this.getTaskIndexById(id);
    this.tasks[index].completed = true;
  }

  unCompleteTask(id: number) {
    const index = this.getTaskIndexById(id);
    this.tasks[index].completed = false;
  }

  removeTask(id: number) {
    const index = this.getTaskIndexById(id);
    this.tasks.splice(index, 1);
  }

  getTaskIndexById(id: number) {
    return this.tasks.findIndex((task) => task.id === id);
  }

  getUnCompletedTasks() {
    return this.tasks.filter((task) => !task.completed);
  }

  getCompletedTasks() {
    return this.tasks.filter((task) => task.completed);
  }

  toggleSidebar = ()=>{
    this.sidebarOpen = !this.sidebarOpen;
  }
}
