import { Component, ElementRef, ViewChild } from '@angular/core';
import { ITask } from './interfaces/ITask';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: ITask[] = [];
  taskForm = new FormGroup({
    title: new FormControl(),
  });

  @ViewChild('inputTitle') inputTitle!: ElementRef;

  addTask() {
    const { title } = this.taskForm.value;

    if (title !== '') {
      this.tasks.push({
        id: btoa([btoa(title), Date.now()].join('-')),
        title,
        completed: false,
      });
      this.inputTitle.nativeElement.value = '';
      this.inputTitle.nativeElement.focus();
    }
  }

  completeTask(id: string) {
    const index = this.getTaskIndexById(id);
    this.tasks[index].completed = true;
  }

  unCompleteTask(id: string) {
    const index = this.getTaskIndexById(id);
    this.tasks[index].completed = false;
  }

  removeTask(id: string) {
    const index = this.getTaskIndexById(id);
    this.tasks.splice(index, 1);
  }

  getTaskIndexById(id: string) {
    return this.tasks.findIndex((task) => task.id === id);
  }

  getUnCompletedTasks() {
    return this.tasks.filter((task) => !task.completed);
  }

  getCompletedTasks() {
    return this.tasks.filter((task) => task.completed);
  }
}
