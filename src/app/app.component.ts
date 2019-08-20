import { Component } from '@angular/core';

@Component({
  selector: 'todos',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTodo: string;
  todos: any;
  todoObj: any;
  itemLeft:number=0;

  constructor() {
    this.newTodo = '';
    this.todos = [];
  }


  addTodo(event:any):void {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false
    }
    this.todos.push(this.todoObj);
    this.newTodo = '';
    this.getInCompletedTodo();
    event.preventDefault();
  }


  deleteTodo(index:number):void {
    this.todos.splice(index, 1);
    this.getInCompletedTodo();
  }


  deleteSelectedTodos():void {
    //need ES5 to reverse loop in order to splice by index
    for (var i = (this.todos.length - 1); i > -1; i--) {
      if (this.todos[i].completed) {
        this.todos.splice(i, 1);
      }
    }
  }

  //Get in completed task count
  getInCompletedTodo(){
    let inCompleted = this.todos.filter(item => item.completed == false);
    this.itemLeft= inCompleted.length;
  }
}
