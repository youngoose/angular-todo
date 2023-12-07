import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../todo/todo.model';
import { v4 as uuidv4 } from 'uuid';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  @Output() todo = new EventEmitter<Todo>();

  todoForm: FormGroup;

  ngOnInit() {
    this.todoForm = new FormGroup({
      todo: new FormControl(null),
    });
  }

  get todoControl(): AbstractControl {
    return this.todoForm.controls['todo'];
  }

  addTodoItem() {
    if (this.todoControl.value) {
      this.todo.emit({ id: uuidv4(), todo: this.todoControl.value } as Todo);
    }
    this.todoControl.reset();
  }
}
