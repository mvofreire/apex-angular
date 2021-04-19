import { Component, Input } from '@angular/core';
import { ITask } from 'src/app/interfaces/ITask';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() tasks: ITask[] = [];
  @Input() onRemoveTask!: (id: number) => void;
  @Input() onCompleteTask!: (id: number) => void;
}
