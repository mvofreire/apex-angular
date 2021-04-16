import { Component } from '@angular/core';
import { ITask } from './interfaces/ITask';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: ITask[] = [
    {
      id: 'asdasd',
      title: 'Limpar minha casa',
      completed: false,
    },
    {
      id: 'bbb',
      title: 'Cortar o cabelo',
      completed: true,
    },
  ];
}
