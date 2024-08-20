import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from "./MyComponents/todos/todos.component";
import { NavbarComponent } from "./MyComponents/navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TodosComponent, NavbarComponent]
})
export class AppComponent {
  title = 'my-first-project';
  constructor(){
    // setTimeout(() => {
    //   this.title = "Hello Jatin";
    // }, 2000);
  }
}
