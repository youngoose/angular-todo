import { Component } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  list: Todo[] = [
    {
      id: 1,
      todo: 'study',
    },
    {
      id: 2,
      todo: 'work out',
    },
    {
      id: 3,
      todo: 'grocery',
    },
  ];
}
