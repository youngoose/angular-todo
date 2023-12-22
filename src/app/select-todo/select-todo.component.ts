import { Component, EventEmitter, Output } from '@angular/core';

const TODO_STATUS = ['all', 'active', 'completed'];

@Component({
  selector: 'app-select-todo',
  templateUrl: './select-todo.component.html',
  styleUrls: ['./select-todo.component.scss'],
})
export class SelectTodoComponent {
  @Output() selectedStatus = new EventEmitter();

  todoStatus = TODO_STATUS;

  selectStatus(e) {
    this.selectedStatus.emit(e.target.value);
  }
}
