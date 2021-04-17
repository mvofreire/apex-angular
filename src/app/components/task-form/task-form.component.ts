import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  taskForm = new FormGroup({
    title: new FormControl(),
  });

  @ViewChild('inputTitle') inputTitle!: ElementRef;
  @Input() onAddTask!: (title: string) => void;

  handleAddClick() {
    const { title } = this.taskForm.value;

    if (title !== '' && !!this.onAddTask) {
      this.onAddTask(title);
      this.inputTitle.nativeElement.value = '';
      this.inputTitle.nativeElement.focus();
    }
  }
}
