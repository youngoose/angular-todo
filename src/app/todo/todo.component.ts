import { Component } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  todoList: Todo[] = [];

  addTodo(newTodo: Todo) {
    this.todoList = [...this.todoList, newTodo];
  }

  deleteTodo(id: Todo['id']) {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
  }
}
