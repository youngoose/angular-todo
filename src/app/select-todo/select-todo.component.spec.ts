import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTodoComponent } from './select-todo.component';

describe('SelectTodoComponent', () => {
  let component: SelectTodoComponent;
  let fixture: ComponentFixture<SelectTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
