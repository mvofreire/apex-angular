import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ITask } from 'src/app/interfaces/ITask';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {

  tasks: ITask[] = [];
  sidebarOpen = false;

  constructor(private service: TasksService, private snackbar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData = () => {
    this.service.list().subscribe((data) => {
      this.tasks = data;
    });
  };

  addTask = (title: string) => {
    this.service
      .create(title)
      .subscribe(this.loadData, (e: HttpErrorResponse) => {
        this.snackbar.open(e.error, 'dismiss', { duration: 5000 });
      });
  };

  completeTask = (id: number) => {
    this.service.changeTaskComplete(id, true).subscribe(this.loadData);
  };

  unCompleteTask = (id: number) => {
    this.service.changeTaskComplete(id, false).subscribe(this.loadData);
  };

  removeTask = (id: number) => {
    if (confirm(`Deseja realmente apagar a tarefa #${id}`)) {
      this.service.remove(id).subscribe(this.loadData);
    }
  };

  getTaskIndexById = (id: number) => {
    return this.tasks.findIndex((task) => task.id === id);
  };

  getUnCompletedTasks = () => {
    return this.tasks.filter((task) => !task.completed);
  };

  getCompletedTasks = () => {
    return this.tasks.filter((task) => task.completed);
  };

  toggleSidebar = () => {
    this.sidebarOpen = !this.sidebarOpen;
  };

  removeAll = () => {
    if (confirm('Deseja Realmente remover todos')) {
      this.service.removeAll().subscribe(this.loadData);
    }
  };

}
