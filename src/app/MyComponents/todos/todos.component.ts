import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
    selector: 'app-todos',
    standalone: true,
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.css',
    imports: [CommonModule, TodoItemComponent, AddTodoComponent]
})
export class TodosComponent implements OnInit{
DeleteTodo(todo: Todo) {
  console.log(todo);
  const index = this.todos.indexOf(todo);
  this.todos.splice(index, 1);

}

  todos:Todo[];
  constructor() { 
    this.todos = [
      { sno: 1, title: "string", desc: "hello", active: true},
      { sno: 2, title: "string 2", desc: "hell0 2 ", active: true},
      { sno: 3, title: "string 3", desc: "hello 3", active: true},
    ]
  }
  ngOnInit(): void {
    
  }

  
}
