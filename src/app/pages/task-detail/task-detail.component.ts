import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITask } from 'src/app/interfaces/ITask';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent implements OnInit {
  id!: number;
  task!: ITask;

  constructor(
    private route: ActivatedRoute,
    private service: TasksService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      this.loadData();
    });
  }

  loadData = () => {
    this.service.show(this.id).subscribe((data) => (this.task = data));
  };

  removerTask = () => {
    this.service.remove(this.id).subscribe(this.goToTaskPage);
  };

  completeTask = () => {
    this.service.changeTaskComplete(this.id, true).subscribe(this.loadData);
  };

  unCompleteTask = () => {
    this.service.changeTaskComplete(this.id, false).subscribe(this.loadData);
  };

  goToTaskPage = () => {
    this.router.navigate(['']);
  };
}
