import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { v4 as uuidv4 } from 'uuid';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todoForm: FormGroup;
  todoList: Todo[] = [];

  ngOnInit() {
    this.todoForm = new FormGroup({
      addTodo: new FormControl(null),
      checkTodo: new FormControl(),
    });
  }

  get addTodoControl(): AbstractControl {
    return this.todoForm.controls['addTodo'];
  }

  get checkTodoControl(): AbstractControl {
    return this.todoForm.controls['checkTodo'];
  }

  addTodoItem() {
    if (!this.addTodoControl.value) {
      return;
    }

    const newTodo = {
      id: uuidv4(),
      todo: this.addTodoControl.value,
      status: 'active',
    } as Todo;

    this.todoList = [...this.todoList, newTodo];
    this.addTodoControl.reset();
  }

  deleteTodo(id: Todo['id']) {
    this.todoList = this.todoList.filter((todo: Todo) => todo.id !== id);
  }

  handleChange(id: Todo['id']) {
    this.todoList = this.todoList.map((todo: Todo) => {
      if (todo.id === id) {
        todo.status === 'active'
          ? (todo.status = 'completed')
          : (todo.status = 'active');
        return todo;
      }
      return todo;
    });
  }

  changeSelectedStatus(status) {
    console.log('status from child: ', status);
  }
}
