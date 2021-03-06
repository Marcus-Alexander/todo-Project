import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myName = "Marcus";
  todoInput = '';
  todos = [];

  // User Inputs Name -> YourName's To Do List

  //Creates to do list
  createTodo() {
    let trimmedInput = this.todoInput.trim();
    if (trimmedInput  !== "") {
      this.todos.push({
        isChecked: false,
        name: this.todoInput,
      });
    }

    this.todoInput = "";
  }

  checkOffTodo(chore) {
    chore.isChecked = !chore.isChecked
    console.log('hello');
  }
  //Edit to do list
  editTodo(chore) {
    console.log('Chore that was clicked' + chore);
    let index = this.todos.indexOf(chore);
    console.log('Index of that chore:' + index);
    
    let tempTodoDesc = this.todos[index].name;
    this.todos[index].name = prompt('New To Do:', this.todos[index].name);
    if (this.todos[index].name == null) {
      this.todos[index].name = tempTodoDesc;
    }


  }
  //Delete to do
  deleteTodo(chore) {
    console.log('Chore that was clicked' + chore);
    let index = this.todos.indexOf(chore);
    this.todos.splice(index, 1);
  }

  deleteTodoAll() {
    this.todos = [];
  }
}

