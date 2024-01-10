import { Component, OnInit } from '@angular/core';
import { Todo, TodoStatus } from './todo.model';
import { v4 as uuidv4 } from 'uuid';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TODO_STATUS } from '../todo.constant';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todoForm: FormGroup;
  todoStatus = TODO_STATUS;

  todoList: Todo[] = [
    { id: '1', todo: 'lunch', status: TodoStatus.ACTIVE },
    { id: '2', todo: 'work out', status: TodoStatus.ACTIVE },
    { id: '3', todo: 'swimming', status: TodoStatus.ACTIVE },
  ];

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.todoForm = this.fb.group({
      addTodo: [''],
      checkTodo: false,
      statusTodo: [TodoStatus.ALL]
    })
  }

  get addTodoControl() {
    return this.todoForm.get('addTodo');
  }

  get statusTodoControl() {
    return this.todoForm.get('statusTodo');
  }

  addTodoItem() {
    if (!this.addTodoControl?.value) {
      return;
    }

    const newTodo = {
      id: uuidv4(),
      todo: this.addTodoControl?.value,
      status: 'active',
    } as Todo;

    this.todoList = [...this.todoList, newTodo];
    this.addTodoControl?.reset();
  }

  deleteTodo(id: Todo['id']) {
    this.todoList = this.todoList.filter((todo: Todo) => todo.id !== id);
  }

  handleChange(id: Todo['id']) {
    this.todoList = this.todoList.map((todo: Todo) => {
      if (todo.id === id) {
        todo.status === 'active'
          ? (todo.status = TodoStatus.COMPLETED)
          : (todo.status = TodoStatus.ACTIVE);
        return todo;
      }
      return todo;
    });
  }

  changeSelectedStatus(e) {
    this.statusTodoControl?.setValue(e.target.value);
    const status = this.statusTodoControl?.value;

    if (status === 'all') {
      console.log(status);
      return;
    } else if (status === 'completed') {
      console.log(status);
    } else {
      console.log(status);
    }

    // if (status === 'all') {
    //   return;
    // } else if (status === 'completed') {
    //   return this.todoList.filter((todo: Todo) => todo.status === 'completed');
    // } else {
    //   return this.todoList.filter((todo: Todo) => todo.status === 'active');
    // }
  }
}
